"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["56262"], {
59536: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_daylight_saving_time_mdx_878_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-daylight-saving-time-mdx-878.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_daylight_saving_time_mdx_878_namespaceObject = JSON.parse('{"id":"platform/biostar_air/daylight-saving-time","title":"Horario de Verano (DST)","description":"Aprende a configurar los ajustes de DST automáticos y manuales en BioStar Air, a habilitar el DST en los dispositivos y a gestionar los ajustes de zona horaria en varias ubicaciones.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/daylight-saving-time.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/daylight-saving-time","permalink":"/docs/es/platform/biostar_air/daylight-saving-time","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/daylight-saving-time.mdx","tags":[],"version":"current","frontMatter":{"id":"daylight-saving-time","title":"Horario de Verano (DST)","description":"Aprende a configurar los ajustes de DST automáticos y manuales en BioStar Air, a habilitar el DST en los dispositivos y a gestionar los ajustes de zona horaria en varias ubicaciones.","keywords":["Horario de Verano (DST)","DST","zona horaria"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configuración adicional del sitio","permalink":"/docs/es/platform/biostar_air/service-configuration"},"next":{"title":"Personalizar plantillas de correo electrónico","permalink":"/docs/es/platform/biostar_air/customizing-email-templates"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/daylight-saving-time.mdx


const frontMatter = {
	id: 'daylight-saving-time',
	title: 'Horario de Verano (DST)',
	description: 'Aprende a configurar los ajustes de DST automáticos y manuales en BioStar Air, a habilitar el DST en los dispositivos y a gestionar los ajustes de zona horaria en varias ubicaciones.',
	keywords: [
		'Horario de Verano (DST)',
		'DST',
		'zona horaria'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Paso 1: Crear perfil de DST",
  "id": "addingNewdst",
  "level": 2
}, {
  "value": "Agregar nuevo perfil",
  "id": "agregar-nuevo-perfil",
  "level": 3
}, {
  "value": "Editar el perfil DST existente",
  "id": "editingDstConfiguration",
  "level": 3
}, {
  "value": "Eliminar el perfil DST",
  "id": "deleteDstProfile",
  "level": 3
}, {
  "value": "Paso 2: Configuración de la hora del sitio",
  "id": "setSiteTime",
  "level": 2
}, {
  "value": "Paso 3: Habilitar el horario de verano para los dispositivos",
  "id": "enablingDstForDevices",
  "level": 2
}, {
  "value": "Lista de verificación",
  "id": "checklist",
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
  }, {Cmd, IcAirEdit, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Utiliza la configuración del Horario de Verano (DST) para definir cómo el sitio ajusta la hora. Esto es especialmente importante para garantizar un registro coherente y preciso de la hora cuando gestionas un sitio con dispositivos y registros en distintas zonas horarias."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para una gestión precisa del tiempo en BioStar Air, es necesario configurar los ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ajustes de DST en tres lugares"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Perfil de DST"
          }), ": Define la fecha y la hora de inicio y fin del DST para cada zona horaria."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hora del sitio"
          }), ": Establece la zona horaria aplicada al sitio y a los registros de eventos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hora del dispositivo"
          }), ": Configura cada lector individual para que ajuste correctamente su reloj."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Las tres opciones deben configurarse correctamente en los sitios ubicados en zonas horarias que observan el Horario de Verano."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Consulta el siguiente video para obtener una guía sobre cómo configurar los ajustes del Horario de Verano (DST)."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "e51UOKLECz8"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Considera lo siguiente al revisar ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "event_logs_submenu",
          product: "air",
          className: "normal"
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si la hora del dispositivo está configurada, las marcas de tiempo de los registros de eventos se ajustan al horario de verano de cada dispositivo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si la hora del sitio está configurada, las marcas de tiempo se ajustan según la configuración de DST del sitio en lugar de la de cada dispositivo."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addingNewdst",
      children: "Paso 1: Crear perfil de DST"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Un perfil de DST define la fecha y la hora en que el DST comienza y termina para una zona horaria específica. Debe crear un perfil de DST para cada zona horaria en la que se encuentren el sitio y los lectores."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agregar-nuevo-perfil",
      children: "Agregar nuevo perfil"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "daylight_saving_time_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_add_DST",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-dst.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el elemento deseado en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_timezone",
            product: "air"
          }), " cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "dst_add_modal_title",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona la configuración automática o manual en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "dst_add_modal_subtitle_setting_dst",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Automático"
              }), ": La configuración de DST para la zona horaria seleccionada se agrega automáticamente. Las fechas de inicio y fin del DST se determinan según las reglas estándar de esa zona horaria."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-settings-dst-add-auto.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Manual"
              }), ": Establece manualmente las horas de inicio y fin correspondientes para la zona horaria."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-settings-dst-add-manual.png"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "date_label",
                    product: "air"
                  }), ": Selecciona las fechas en las que el DST comienza y termina."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "dropdown_label_week",
                    product: "air"
                  }), ": Selecciona las semanas en las que el DST comienza y termina."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " en la parte inferior para guardar el perfil DST."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "editingDstConfiguration",
      children: "Editar el perfil DST existente"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "daylight_saving_time_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el perfil DST que quieras editar en la lista. Alternativamente, selecciona la casilla y haz clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " en la parte superior."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Modifica la hora de inicio y de finalización cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "dst_update_modal_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-dst-edit.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " en la parte inferior para guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteDstProfile",
      children: "Eliminar el perfil DST"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "daylight_saving_time_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haz clic en la casilla del perfil DST que quieras eliminar en la lista. Puedes seleccionar uno o más perfiles."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " en la parte superior de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensajes, haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_group_yes_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setSiteTime",
      children: "Paso 2: Configuración de la hora del sitio"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La hora del sitio determina la zona horaria predeterminada que utiliza todo el sistema. Los siguientes elementos se ven afectados por esta configuración:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Marcas de tiempo del registro de eventos"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Informes y datos de monitoreo"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Zona horaria predeterminada aplicada al registrar un nuevo dispositivo"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sigue las instrucciones a continuación para configurar la zona horaria del sitio y habilitar el horario de verano."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_tab_setting",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona la zona horaria deseada en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input4",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-setting-timezone.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Habilita ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), " para aplicar el horario de verano a la zona horaria seleccionada."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si la opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_field_dst_usage",
          product: "air"
        }), " no está habilitada en una zona horaria donde aplica el horario de verano, el sistema no ajustará la hora automáticamente y los registros de eventos pueden mostrarse de forma incorrecta."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enablingDstForDevices",
      children: "Paso 3: Habilitar el horario de verano para los dispositivos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cada dispositivo conectado a BioStar Air mantiene su propio reloj, que se usa para el control de acceso y los registros de asistencia. Configura los ajustes de horario de verano para cualquier dispositivo ubicado en una zona horaria donde aplique el horario de verano."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los dispositivos con pantalla, como BioStation 3, muestran la hora. Los dispositivos sin pantalla, como XPass 2, mantienen sus relojes internos para el control de acceso y los registros de tiempo y asistencia."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura el horario de verano en todos los dispositivos, tengan o no pantalla, para garantizar que los registros de eventos, los registros de acceso y los datos de asistencia se registren correctamente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haz clic en el dispositivo al que quieras aplicar los ajustes de horario de verano en la lista."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona la zona horaria deseada en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_timezone",
            product: "air"
          }), " y activa la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-edit-timezone.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Esta opción está habilitada de forma predeterminada en las zonas horarias donde se aplica el horario de verano."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " en la parte inferior para guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Si la hora del dispositivo no está configurada correctamente, pueden ocurrir los siguientes problemas:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Error de acceso denegado"
            }), ": La hora de acceso está configurada para comenzar a las 07:00 AM, pero si el dispositivo cree que son las 06:00 AM, se denegará el acceso al usuario."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Error de programación"
            }), ": El bloqueo/desbloqueo a la hora programada puede no ser preciso."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Error en los registros"
            }), ": Las horas en el registro de eventos y en los registros de tiempo y asistencia no coinciden con la hora real."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checklist",
      children: "Lista de verificación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para garantizar la precisión del horario en las regiones que observan el horario de verano (DST), asegúrate de haber completado las tres acciones siguientes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Crear perfiles de DST"
          }), ": ¿Has creado los perfiles de DST necesarios para cada zona horaria?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuración horaria del sitio"
          }), ": ¿Has establecido la zona horaria del sitio y activado la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ajustes de DST del dispositivo"
          }), ": ¿Has configurado la zona horaria de cada dispositivo y activado la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), "?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si las tres están configuradas correctamente, los registros de eventos, los horarios de acceso y los registros de asistencia mostrarán la hora correcta."
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