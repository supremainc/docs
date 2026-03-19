"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["44050"], {
18094: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_door_schedules_mdx_ce0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-door-schedules-mdx-ce0.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_door_schedules_mdx_ce0_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-door-schedules","title":"Administrar horarios de las puertas","description":"Configure el cierre automático de las puertas según la hora del día, establezca horarios de desbloqueo y administre las opciones de control de acceso basadas en autenticación. Los horarios garantizan un acceso seguro y controlado.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-door-schedules.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-door-schedules","permalink":"/docs/es/platform/biostar_air/managing-door-schedules","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-door-schedules.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-door-schedules","title":"Administrar horarios de las puertas","description":"Configure el cierre automático de las puertas según la hora del día, establezca horarios de desbloqueo y administre las opciones de control de acceso basadas en autenticación. Los horarios garantizan un acceso seguro y controlado.","keywords":["horario de la puerta","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Administrar Grupo de Puertas","permalink":"/docs/es/platform/biostar_air/managing-door-groups"},"next":{"title":"Ascensores","permalink":"/docs/es/platform/biostar_air/manage-elevator"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-door-schedules.mdx


const frontMatter = {
	id: 'managing-door-schedules',
	title: 'Administrar horarios de las puertas',
	description: 'Configure el cierre automático de las puertas según la hora del día, establezca horarios de desbloqueo y administre las opciones de control de acceso basadas en autenticación. Los horarios garantizan un acceso seguro y controlado.',
	keywords: [
		'horario de la puerta',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Cuándo necesita horarios",
  "id": "cuándo-necesita-horarios",
  "level": 2
}, {
  "value": "<Cmd class=\"bold\"></Cmd> vs <Cmd class=\"bold\"></Cmd>",
  "id": "-vs-",
  "level": 3
}, {
  "value": "Horario de desbloqueo",
  "id": "horario-de-desbloqueo",
  "level": 2
}, {
  "value": "Casos de uso típicos",
  "id": "casos-de-uso-típicos",
  "level": 3
}, {
  "value": "Configurar horarios de desbloqueo",
  "id": "configuringUnlockSchedules",
  "level": 3
}, {
  "value": "Horario de bloqueo",
  "id": "horario-de-bloqueo",
  "level": 2
}, {
  "value": "Casos de uso típicos",
  "id": "casos-de-uso-típicos-1",
  "level": 3
}, {
  "value": "Configurar horarios de bloqueo",
  "id": "configuring-lock-schedules",
  "level": 3
}, {
  "value": "Registrar un nuevo horario",
  "id": "registeringNewSchedules",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirSchedule, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirSchedule) _missingMdxReference("IcAirSchedule", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede configurar horarios para que las puertas se bloqueen y se desbloqueen automáticamente según períodos de tiempo. Configure los horarios de bloqueo y desbloqueo y utilice opciones avanzadas como ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "abrir después de la primera autenticación"
      }), " para mantener un acceso seguro y controlado."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los horarios solo se aplican a puertas y dispositivos que estén conectados a Internet."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los grupos de días festivos ignoran los horarios de desbloqueo a menos que se configuren por separado."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Mantenga al menos un administrador con acceso sin restricciones para emergencias."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cuándo-necesita-horarios",
      children: "Cuándo necesita horarios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Los horarios de las puertas son opcionales"
      }), ". La mayoría de los sitios funcionan correctamente con el control de acceso básico. Cuando un usuario autorizado presenta una credencial válida, la puerta se desbloquea automáticamente; no es necesaria ninguna configuración adicional de horarios."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure los horarios únicamente en las siguientes situaciones:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando necesite permitir acceso sin restricciones durante períodos específicos"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando necesite bloquear el acceso a todos los usuarios durante períodos específicos"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando necesite aplicar diferentes políticas de acceso en distintos horarios"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para evitar confusiones entre ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "unlock_schedule",
        product: "air",
        className: "bold"
      }), " y ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "lock_schedule",
        product: "air",
        className: "bold"
      }), " en BioStar Air, comprenda cómo funciona cada uno y cuándo utilizarlo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-vs-",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "unlock_schedule",
        product: "air",
        className: "bold"
      }), " vs ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "lock_schedule",
        product: "air",
        className: "bold"
      })]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Función"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Horario de desbloqueo"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Horario de bloqueo"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Estado de la puerta durante el horario"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Siempre desbloqueada"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Siempre bloqueada"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Autenticación requerida"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No requerida; cualquiera puede acceder libremente"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Las credenciales no pueden desbloquear la puerta"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Desbloqueo manual"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Posible"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Solo el administrador del sitio puede desbloquearla"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Operación del relé"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Activado de forma continua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No se activa"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "El término 'Administrador del sitio' se refiere a los administradores designados en el portal BioStar Air Admin o en la aplicación móvil."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "horario-de-desbloqueo",
      children: "Horario de desbloqueo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Durante el período programado, la puerta permanece desbloqueada y el relé permanece activado de forma continua. No se requiere autenticación; cualquiera puede entrar libremente durante este tiempo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "casos-de-uso-típicos",
      children: "Casos de uso típicos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Puertas principales en áreas públicas"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Áreas comunes en comunidades residenciales"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Puertas del vestíbulo de oficinas durante el horario laboral"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuringUnlockSchedules",
      children: "Configurar horarios de desbloqueo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Un horario de desbloqueo es el período durante el cual una puerta permanece abierta sin autenticación. Configure un horario de desbloqueo como se indica a continuación."
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "En la lista, marque la casilla de la puerta cuya programación de desbloqueo desea configurar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirSchedule, {
            title: "Schedule Settings"
          }), " en la parte superior de la lista de puertas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), ", seleccione un horario predefinido o cree uno nuevo en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "unlock",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-unlock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " para aplicar el horario de desbloqueo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "unlock_after_first_auth",
              product: "air"
            }), " esté habilitado, la puerta permanecerá desbloqueada según el horario seleccionado después de que el primer usuario se autentique. Esta opción es útil en oficinas y comercios donde la puerta debe permanecer bloqueada hasta que llegue el primer empleado."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Tiendas que solo abren después de la llegada del personal"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Oficinas donde el primer empleado en llegar desbloquea el edificio para los demás"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Instalaciones que requieren que el personal inicie el acceso antes de que los miembros puedan entrar"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo registrar horarios, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#registeringNewSchedules"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "horario-de-bloqueo",
      children: "Horario de bloqueo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Durante el período programado, la puerta permanece bloqueada y el relé no se activa. Incluso si se presenta una credencial válida, la puerta no puede desbloquearse mediante autenticación. Solo un administrador del sitio puede desbloquearla manualmente desde el portal BioStar Air Admin o la aplicación móvil."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "casos-de-uso-típicos-1",
      children: "Casos de uso típicos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Áreas que deben permanecer estrictamente cerradas después de ciertas horas"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Instalaciones como piscinas, gimnasios u otras áreas restringidas"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuring-lock-schedules",
      children: "Configurar horarios de bloqueo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Un horario de bloqueo define el período durante el cual la puerta permanece bloqueada y no puede abrirse incluso con credenciales válidas. Configure un horario de bloqueo como se indica a continuación."
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "En la lista, marque la casilla de la puerta cuya programación de bloqueo desea configurar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirSchedule, {
            title: "Schedule Settings"
          }), " en la parte superior de la lista de puertas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), ", seleccione un horario predefinido o cree uno nuevo en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-lock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " para aplicar el horario de bloqueo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Debido a que un horario de bloqueo anula los derechos de acceso estándar, los usuarios no pueden dejar la puerta desbloqueada durante el período de bloqueo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo registrar nuevos horarios, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#registeringNewSchedules"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registeringNewSchedules",
      children: "Registrar un nuevo horario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga los pasos a continuación para registrar un nuevo horario."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_create_schedules",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-add-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pantalla Agregar horario, ingrese ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_name",
            product: "air"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_description",
            product: "air"
          }), " (opcional)."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_section_title_time_intervals",
            product: "air"
          }), ", seleccione los días y los horarios en los que la puerta debe permanecer abierta sin autenticación y, a continuación, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar el horario."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Después de registrar un nuevo horario, vuelva a ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_submenu",
        product: "air"
      }), " y configure el horario de la puerta."]
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