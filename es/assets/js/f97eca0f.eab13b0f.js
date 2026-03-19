"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16307"], {
55148: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_settings_alert_report_mdx_f97_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-settings-alert-report-mdx-f97.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_settings_alert_report_mdx_f97_namespaceObject = JSON.parse('{"id":"platform/biostar_air/settings-alert-report","title":"Configurar alertas y informes","description":"Este artículo ofrece instrucciones paso a paso para configurar alertas de eventos e informes automáticos en BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/settings-alert-report.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/settings-alert-report","permalink":"/docs/es/platform/biostar_air/settings-alert-report","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/settings-alert-report.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-alert-report","title":"Configurar alertas y informes","description":"Este artículo ofrece instrucciones paso a paso para configurar alertas de eventos e informes automáticos en BioStar Air.","keywords":["BioStar Air","Configuración de alertas","Configuración de informes","Alertas del sistema","Informes de usuario"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Personalizar plantillas de correo electrónico","permalink":"/docs/es/platform/biostar_air/customizing-email-templates"},"next":{"title":"Formato de tarjeta Wiegand personalizado","permalink":"/docs/es/platform/biostar_air/custom-wiegand-card-formats"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/settings-alert-report.mdx


const frontMatter = {
	id: 'settings-alert-report',
	title: 'Configurar alertas y informes',
	description: 'Este artículo ofrece instrucciones paso a paso para configurar alertas de eventos e informes automáticos en BioStar Air.',
	keywords: [
		'BioStar Air',
		'Configuración de alertas',
		'Configuración de informes',
		'Alertas del sistema',
		'Informes de usuario'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar alertas",
  "id": "addAlert",
  "level": 2
}, {
  "value": "Establecer condiciones",
  "id": "conditionSettings",
  "level": 3
}, {
  "value": "Registro de eventos",
  "id": "eventLog",
  "level": 4
}, {
  "value": "Sistema",
  "id": "system",
  "level": 4
}, {
  "value": "Establecer destinatarios de alertas",
  "id": "alertTargetSettings",
  "level": 3
}, {
  "value": "Configurar método de envío",
  "id": "alertSendMethodSettings",
  "level": 3
}, {
  "value": "Generar informes",
  "id": "reportGeneration",
  "level": 2
}, {
  "value": "Configurar condiciones",
  "id": "reportConditionSettings",
  "level": 3
}, {
  "value": "Configurar destinatarios del informe",
  "id": "reportAlertTargetSettings",
  "level": 3
}, {
  "value": "Configurar método de envío",
  "id": "reportAlertSendMethodSettings",
  "level": 3
}, {
  "value": "Editar alertas e informes",
  "id": "editAlertReport",
  "level": 2
}, {
  "value": "Eliminar alertas e informes",
  "id": "deleteAlertReport",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
  }, {Cmd, IcAirRemove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Configurar alertas e informes permite detectar y rastrear automáticamente eventos del sistema y situaciones de seguridad. Este artículo explica cómo configurar las opciones de alertas e informes en BioStar Air."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La configuración de alertas e informes ofrece los siguientes beneficios."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Detecta de inmediato amenazas de seguridad o problemas del sistema y envía alertas en tiempo real a los administradores."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Genera automáticamente informes sobre el estado del sistema y la actividad de los usuarios para mejorar la eficiencia en la gestión."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addAlert",
      children: "Agregar alertas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura alertas para registros de eventos específicos y para el estado del sistema en el sitio."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), ", elige la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.event_log_type",
            product: "air"
          }), " o la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.system_type",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-alert-add-event-log.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de configurar cada elemento, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conditionSettings",
      children: "Establecer condiciones"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "eventLog",
      children: "Registro de eventos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.event_log_type",
        product: "air"
      }), ", establece condiciones de alerta por tipo de evento."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-alert-event-log-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.events_block_title",
            product: "air"
          }), ": Selecciona los tipos de eventos para los que se enviará una alerta. También se puede seleccionar un ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.preset_events_block_title",
            product: "air"
          }), " predefinido."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_label",
            product: "air"
          }), ": Selecciona una puerta. Envía una alerta cuando ocurra un evento en la puerta seleccionada. Se pueden seleccionar varias puertas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.frequency_and_duration_label",
            product: "air"
          }), ": Envía una alerta cuando los eventos ocurran con una frecuencia determinada dentro del período de tiempo definido. Por ejemplo, configura el sistema para que envíe una alerta si un evento ocurre tres veces en cinco minutos."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "system",
      children: "Sistema"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-alert-system-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.system_type",
        product: "air"
      }), ", establece condiciones de alerta basadas en el estado del sistema. Las opciones disponibles son las siguientes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_credit_reminders",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_credit_site_suspension",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_credit_sms_less_than_10",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_apb_battery",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_fw_availabel",
          product: "air"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alertTargetSettings",
      children: "Establecer destinatarios de alertas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Usa ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_target",
        product: "air"
      }), " para designar a los destinatarios de las alertas. Selecciona usuarios por rol de administrador o elige usuarios individuales."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alertSendMethodSettings",
      children: "Configurar método de envío"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Selecciona el método de envío en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_send_by",
        product: "air"
      }), ". Las alertas se envían por correo electrónico, SMS o notificación push de la aplicación."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Los mensajes de texto solo se pueden enviar después de recargar los créditos de SMS. Los créditos de SMS restantes se pueden consultar en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings_menu",
          product: "air"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "credit_center_submenu",
          product: "air"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reportGeneration",
      children: "Generar informes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Genera informes automáticamente en intervalos definidos y envíalos a los administradores. Genera informes sobre la actividad del registro de eventos y el estado de los usuarios."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), ", selecciona la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.report_type",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-alert-add-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de configurar cada elemento, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reportConditionSettings",
      children: "Configurar condiciones"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura el tipo de informe y el intervalo de generación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "name_column",
            product: "air"
          }), ": Selecciona el tipo de informe a generar."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.report_user_tna",
                product: "air"
              }), ": Genera un informe sobre el estado de Tiempo y Asistencia de los usuarios para el período seleccionado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.report_audit_trail",
                product: "air"
              }), ": Genera un informe sobre el estado del registro de auditoría para el período seleccionado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.report_event_log",
                product: "air"
              }), ": Genera un informe sobre la actividad del registro de eventos para el período seleccionado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.report_user",
                product: "air"
              }), ": Genera un informe sobre el estado de los usuarios para el período seleccionado."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "label_title_schedule",
            product: "air"
          }), ": Selecciona el intervalo de generación de informes. Elige entre ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "weekly_option",
            product: "air"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monthly_option",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reportAlertTargetSettings",
      children: "Configurar destinatarios del informe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Usa ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_target",
        product: "air"
      }), " para designar a los destinatarios de las alertas. Selecciona usuarios por rol de administrador o elige usuarios individuales."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reportAlertSendMethodSettings",
      children: "Configurar método de envío"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Selecciona el método de envío en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_send_by",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Los informes se entregan ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "únicamente por correo electrónico"
        }), ". No se envían por SMS ni por notificación push de la aplicación."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editAlertReport",
      children: "Editar alertas e informes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haz clic en la alerta o el informe que deseas editar en la lista."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.edit_alert_header",
            product: "air"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.edit_report_header",
            product: "air"
          }), ", edita los elementos necesarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " en la parte inferior para guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteAlertReport",
      children: "Eliminar alertas e informes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona la casilla de la alerta o del informe que deseas eliminar en la lista. Se puede seleccionar más de un elemento."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " en la esquina superior izquierda de la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_delete",
            product: "air"
          }), " cuando aparezca la ventana del mensaje."]
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