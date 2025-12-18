"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["13397"], {
75571: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_event_mdx_a7e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-event-mdx-a7e.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_event_mdx_a7e_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-event","title":"Supervisar evento","description":"Esta guía proporciona métodos para supervisar y gestionar eventos en tiempo real mediante la función de supervisión de eventos. Utilice varias funciones, como eventos de alarma, eventos de advertencia, filtrado y gestión de estados, para manejar los eventos de manera eficiente.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-event.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-event","permalink":"/docs/es/platform/biostar_x/monitoring-event","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-event.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-event","title":"Supervisar evento","description":"Esta guía proporciona métodos para supervisar y gestionar eventos en tiempo real mediante la función de supervisión de eventos. Utilice varias funciones, como eventos de alarma, eventos de advertencia, filtrado y gestión de estados, para manejar los eventos de manera eficiente.","keywords":["Monitorizar","Supervisión de eventos","Evento en tiempo real","Evento de alarma","Evento de advertencia","Filtrado de eventos"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Supervisar Video","permalink":"/docs/es/platform/biostar_x/monitoring-video"},"next":{"title":"Fecha","permalink":"/docs/es/platform/biostar_x/how-to-guide-data"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-event.mdx


const frontMatter = {
	id: 'monitoring-event',
	title: 'Supervisar evento',
	description: 'Esta guía proporciona métodos para supervisar y gestionar eventos en tiempo real mediante la función de supervisión de eventos. Utilice varias funciones, como eventos de alarma, eventos de advertencia, filtrado y gestión de estados, para manejar los eventos de manera eficiente.',
	keywords: [
		'Monitorizar',
		'Supervisión de eventos',
		'Evento en tiempo real',
		'Evento de alarma',
		'Evento de advertencia',
		'Filtrado de eventos'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*Example image to be added*/
/*Differences between Alarm Events and Warning Events*/


const toc = [{
  "value": "Revisar la lista de eventos",
  "id": "event-list",
  "level": 2
}, {
  "value": "Distinguir eventos por color",
  "id": "event-color",
  "level": 2
}, {
  "value": "Revisar eventos de alarma",
  "id": "alarm-event",
  "level": 2
}, {
  "value": "Eventos en tiempo real",
  "id": "real-time-event",
  "level": 2
}, {
  "value": "Filtrar eventos",
  "id": "filter-event",
  "level": 2
}, {
  "value": "Aplicar filtros",
  "id": "apply-filter",
  "level": 3
}, {
  "value": "Eliminar filtros",
  "id": "removefilter",
  "level": 3
}, {
  "value": "Borrar la lista de eventos",
  "id": "cleareventlist",
  "level": 2
}, {
  "value": "Confirmar alarma y registrar acción",
  "id": "acknowledge-alarm-and-record-action",
  "level": 2
}, {
  "value": "Registrar acción para el evento de alarma",
  "id": "recordactionforalarmevent",
  "level": 3
}, {
  "value": "Aplazar confirmación del evento de alarma",
  "id": "deferalarmeventacknowledgment",
  "level": 3
}, {
  "value": "Verificar eventos de alarma en la lista de eventos",
  "id": "verificar-eventos-de-alarma-en-la-lista-de-eventos",
  "level": 3
}, {
  "value": "Ver eventos de alarma sin confirmar",
  "id": "ver-eventos-de-alarma-sin-confirmar",
  "level": 2
}, {
  "value": "Configurar columnas de la lista de eventos",
  "id": "configurar-columnas-de-la-lista-de-eventos",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAlarm, IcClose, IcFilter, IcMoreB, IcPause, IcPlay, IcVidLog, IcViewAlert, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlarm) _missingMdxReference("IcAlarm", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFilter) _missingMdxReference("IcFilter", true);
  if (!IcMoreB) _missingMdxReference("IcMoreB", true);
  if (!IcPause) _missingMdxReference("IcPause", true);
  if (!IcPlay) _missingMdxReference("IcPlay", true);
  if (!IcVidLog) _missingMdxReference("IcVidLog", true);
  if (!IcViewAlert) _missingMdxReference("IcViewAlert", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " en la parte inferior de la página de supervisión, revise y gestione eventos en tiempo real. Gestione eventos de forma eficiente mediante funciones como estado de eventos, manejo de eventos de alarma, filtrado y codificación por colores. Supervise en tiempo real los eventos relacionados con puertas, dispositivos y usuarios y tome medidas rápidas según sea necesario."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-list",
      children: "Revisar la lista de eventos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), ", visualice los eventos a medida que ocurren en tiempo real. Cada evento incluye la siguiente información:"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.date"
          }), ": Fecha y hora en que ocurrió el evento."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.door"
          }), ": Puerta donde ocurrió el evento."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.device"
          }), ": Dispositivo en el que ocurrió el evento."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.user"
          }), ": Usuario que generó el evento."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.event"
          }), ": Información detallada del evento."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.status"
          }), ": Estado del evento. Los eventos activos se muestran como ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.preview.event.active"
          }), ". Los eventos de alarma muestran un botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), ". Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " para resolver el evento."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-alarm-active.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.view"
          }), ": Si el evento incluye información de video de la cámara conectada a la puerta, se muestra un ícono de video (", (0,jsx_runtime.jsx)(IcVidLog, {}), "). Haga clic en este ícono para ver el video."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Haga clic en un evento individual para mostrar información detallada en el lado derecho de la pantalla. Esta información detallada incluye la hora del evento, área, puerta, dispositivo, grupo de usuarios, usuario, puerto y detalles del evento."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si el evento incluye información de video o imágenes de una cámara conectada a la puerta, también podrá ver los registros de video e imágenes."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-color",
      children: "Distinguir eventos por color"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los eventos en la lista se pueden distinguir por color:"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-types.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sin color"
          }), ": Evento normal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#ffa200'
            },
            children: "Naranja"
          }), ": Evento de precaución. Indica eventos que requieren atención, como intentos de acceso no autorizado en áreas restringidas o puertas que quedan abiertas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#ff0000'
            },
            children: "Rojo"
          }), ": Evento de ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#alarm",
            children: "alarma"
          }), ". Indica un evento de advertencia que requiere acción en el sistema."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#6dae00'
            },
            children: "Verde"
          }), ": Evento de alarma resuelto."]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm-event",
      children: "Revisar eventos de alarma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Solo los eventos de alarma se pueden ver en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), ". Haga clic en ", (0,jsx_runtime.jsx)(IcAlarm, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.alarmEvents"
      }), " en la esquina superior derecha de la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), ". La lista mostrará solo eventos de alarma, los cuales se indican en rojo. Los eventos de alarma se muestran en rojo."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-view-only-alarm.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para ver todos los eventos, haga clic en ", (0,jsx_runtime.jsx)(IcAlarm, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.toolbar.allEvents"
        }), " en la esquina superior derecha de la sección ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.title"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-time-event",
      children: "Eventos en tiempo real"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Revise los eventos a medida que ocurren en tiempo real en la lista de la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), ". Para detener los eventos en tiempo real, haga clic en ", (0,jsx_runtime.jsx)(IcPause, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.pause"
      }), " en la esquina superior derecha de la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), ". Haga clic en ", (0,jsx_runtime.jsx)(IcPlay, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.play"
      }), " para reanudar los eventos en tiempo real."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-pause.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filter-event",
      children: "Filtrar eventos"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apply-filter",
      children: "Aplicar filtros"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los usuarios pueden filtrar la lista de eventos según los criterios deseados, lo que permite identificar rápidamente los eventos relevantes. Esto le permite revisar rápidamente los eventos según las condiciones deseadas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcFilter, {}), " en cada columna de encabezado de la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando aparezca la ventana de filtro, seleccione el elemento deseado de la lista izquierda."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-02.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para deseleccionar un elemento, haga clic en ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcClose, {})
          }), ". Para borrar todos los elementos, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.removeAll"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez que haya terminado la configuración, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solo se mostrarán en la lista los eventos que cumplan las condiciones establecidas."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "También puede buscar rápidamente los elementos deseados usando el campo de búsqueda en la ventana de filtro."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Se pueden definir múltiples condiciones para cada columna de encabezado; si se especifica más de una condición, se aplicará la condición ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AND"
            }), ". Al establecer más de una condición, se aplica la condición ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AND"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los elementos que se pueden filtrar pueden variar según la columna de encabezado."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando se aplican condiciones de filtrado, el color del ícono ", (0,jsx_runtime.jsx)("span", {
              className: "text-blue-500",
              children: (0,jsx_runtime.jsx)(IcFilter, {})
            }), " en la columna de encabezado cambia a azul."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removefilter",
      children: "Eliminar filtros"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede borrar las condiciones de filtro aplicadas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcFilter, {})
          }), " en la columna de encabezado donde se aplicaron filtros en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de filtro, haga clic en ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcClose, {})
          }), " junto al elemento que desea eliminar de la lista derecha. Para borrar todos los filtros, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.removeAll"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez que haya configurado todas las condiciones a borrar, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "También puede buscar rápidamente los elementos deseados usando el campo de búsqueda en la ventana de filtro."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Cuando se borran las condiciones de filtrado, el color del ícono en la columna de encabezado vuelve a su estado original."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cleareventlist",
      children: "Borrar la lista de eventos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), ", borre eventos. Haga clic en ", (0,jsx_runtime.jsx)(IcMoreB, {}), " en la esquina superior derecha de la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.clearEvents"
      }), " en el menú emergente. Si hay muchos eventos innecesarios acumulados en la lista, utilice la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.clearEvents"
      }), " para limpiarla."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-remove.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acknowledge-alarm-and-record-action",
      children: "Confirmar alarma y registrar acción"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cuando ocurre un evento de alarma, como la apertura forzada de la puerta, aparece una ventana de mensaje de alarma. La ventana de mensaje de alarma incluye información detallada sobre el evento de alarma activado. En este momento, el administrador puede registrar su confirmación del evento de alarma activado y las acciones realizadas."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-alert-message.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["El botón ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.ignoreAll"
        }), " se muestra solo cuando ocurren dos o más eventos de alarma."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recordactionforalarmevent",
      children: "Registrar acción para el evento de alarma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ingresa las acciones relacionadas con el evento de alarma en el campo de entrada de mensaje. Ingresa hasta 500 caracteres. Ingresa las acciones y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), ". Registra la confirmación y las acciones relacionadas con el evento de alarma. La ventana de mensaje de alarma se cerrará."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deferalarmeventacknowledgment",
      children: "Aplazar confirmación del evento de alarma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Aplaza la confirmación del evento de alarma haciendo clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.ignore"
      }), ". Se pueden registrar las acciones realizadas. La ventana de mensaje de alarma se cerrará. Los eventos de alarma aplazados se muestran en la lista de eventos con el estado ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.preview.event.active"
      }), ", y se puede usar el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-alarm-active.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verificar-eventos-de-alarma-en-la-lista-de-eventos",
      children: "Verificar eventos de alarma en la lista de eventos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " que aparece en la columna ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.status"
      }), " de la lista de eventos para registrar la confirmación y las acciones relacionadas con los eventos de alarma activados. Completa tu entrada y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-alert-acknowledge.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-eventos-de-alarma-sin-confirmar",
      children: "Ver eventos de alarma sin confirmar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Esta función muestra todos los eventos de alarma sin confirmar a la vez y permite registrar las acciones realizadas. Es especialmente útil cuando ocurren múltiples eventos de alarma idénticos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcViewAlert, {}), " en la esquina superior derecha de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-view-alerts-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.activeAlarm.activeAlarmEvents"
          }), ", selecciona en la lista izquierda el evento de alarma para registrar las acciones. Para seleccionar todos los eventos, haz clic en la casilla de verificación ubicada en el extremo izquierdo de la columna de encabezado."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-view-alerts-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingresa las acciones relacionadas con el evento de alarma en el campo de entrada ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.activeAlarm.memo"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Registra las acciones realizadas para el evento seleccionado. Aparecerá una ventana emergente para ingresar la confirmación del evento de alarma y las acciones realizadas."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Selecciona más de un evento de la lista de eventos de alarma para activar el botón ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.acknowledge"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurar-columnas-de-la-lista-de-eventos",
      children: "Configurar columnas de la lista de eventos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agrega columnas para mostrar en la lista de eventos, reordénalas y ocúltalas según sea necesario."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcMoreB, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.columnLayout"
          }), " en la esquina superior derecha de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.columnLayout"
          }), ", haz clic en las casillas de las columnas para mostrarlas u ocultarlas. También cambia el orden de las columnas mediante arrastrar y soltar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-column-layout-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de realizar todos los cambios en la configuración de columnas, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "columnSetting.button.defaultColumn",
          product: "2"
        }), " para inicializar la configuración de columnas."]
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