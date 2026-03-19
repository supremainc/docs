"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["87022"], {
83867: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_event_logs_mdx_9b3_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-monitoring-event-logs-mdx-9b3.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_event_logs_mdx_9b3_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-event-logs","title":"Usar registros de eventos","description":"Esta guía explica cómo monitorear y analizar los registros de eventos en BioStar Air, aplicar filtros, exportar datos y rastrear la actividad administrativa.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-event-logs.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-event-logs","permalink":"/docs/es/platform/biostar_air/monitoring-event-logs","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/monitoring-event-logs.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-event-logs","title":"Usar registros de eventos","description":"Esta guía explica cómo monitorear y analizar los registros de eventos en BioStar Air, aplicar filtros, exportar datos y rastrear la actividad administrativa.","keywords":["Monitorizar","Registros de eventos","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Monitorizar","permalink":"/docs/es/platform/biostar_air/monitoring"},"next":{"title":"Usar registros de auditoría","permalink":"/docs/es/platform/biostar_air/monitoring-audit-logs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-event-logs.mdx


const frontMatter = {
	id: 'monitoring-event-logs',
	title: 'Usar registros de eventos',
	description: 'Esta guía explica cómo monitorear y analizar los registros de eventos en BioStar Air, aplicar filtros, exportar datos y rastrear la actividad administrativa.',
	keywords: [
		'Monitorizar',
		'Registros de eventos',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ver registros de eventos",
  "id": "ver-registros-de-eventos",
  "level": 2
}, {
  "value": "Filtrar registros",
  "id": "filtering-event-logs",
  "level": 2
}, {
  "value": "Configurar informes",
  "id": "generatingReports",
  "level": 2
}, {
  "value": "Enmascarar datos personales",
  "id": "dataMasking",
  "level": 2
}, {
  "value": "Otras funciones",
  "id": "otras-funciones",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirColumn, IcAirDown, IcAirLogfilter, IcAirMask, IcAirRef, IcAirReport, IcAirReportApp, IcSearch, Image, TabItem, Tabs, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirColumn) _missingMdxReference("IcAirColumn", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!IcAirLogfilter) _missingMdxReference("IcAirLogfilter", true);
  if (!IcAirMask) _missingMdxReference("IcAirMask", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirReportApp) _missingMdxReference("IcAirReportApp", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Una de las ventajas clave de una plataforma de control de acceso en la nube es la capacidad de monitorear la actividad del sitio en cualquier momento y desde cualquier lugar. Este documento explica cómo monitorear y analizar los registros de eventos en BioStar Air."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Vea el siguiente video para un tutorial sobre los registros de eventos."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "nwIEYyK-uAg"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-registros-de-eventos",
      children: "Ver registros de eventos"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " para ver los registros de eventos. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-list.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " muestra una tabla con detalles que incluyen la hora del evento y su nombre, el nombre de la puerta, el alias del dispositivo, el tipo de usuario y el nombre de usuario."]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "Esta guía explica cómo consultar el registro de eventos en la aplicación móvil."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-mobile-monitoring-eventlog.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Abra la aplicación BioStar Air en su dispositivo móvil e inicie sesión."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "monitoring_menu",
                product: "air"
              }), " en la parte inferior de la pantalla de inicio."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Toque la tarjeta ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "event_logs_submenu",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Desplácese por la lista de registros de eventos para ver su contenido."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "logs_filters_action_btn",
                  product: "air"
                }), ": Filtrar registros de eventos."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcSearch, {
                  width: "20",
                  height: "20",
                  title: "Search"
                }), ": Buscar por palabras clave específicas. Ingrese uno de los siguientes: ID de tarjeta RF, ID de usuario, correo electrónico o nombre."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcAirReportApp, {
                  width: "20",
                  height: "20",
                  title: "Report"
                }), ": Generar informes. Para obtener más información sobre la creación de informes, consulte ", (0,jsx_runtime.jsx)(DocLink, {
                  inner: "#generatingReports"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcAirDown, {
                  width: "20",
                  height: "20",
                  title: "Download"
                }), ": Descargar informes en formato CSV o PDF."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcAirMask, {
                  width: "20",
                  height: "20",
                  title: "Apply Masking"
                }), ": Aplicar el enmascaramiento de datos personales."]
              }), "\n"]
            }), "\n"]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "column_filter_modal_title",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Personalice las columnas de la tabla para mostrar u ocultar información. Reordene las columnas para colocar las que usa con frecuencia al principio. Haga clic en el botón ", (0,jsx_runtime.jsx)(IcAirColumn, {
        title: "Customize"
      }), " en la parte superior de la lista de registros de eventos. Aparecerá la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "column_filter_modal_title",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-list-custom-table.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione o deseleccione las casillas de las columnas para mostrarlas u ocultarlas."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para reordenar las columnas, haga clic y arrastre una columna a la posición deseada."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_save_btn",
            product: "air"
          }), " para guardar la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_apply_btn",
            product: "air"
          }), " para aplicar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), " a la lista de registros de eventos sin guardar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_reset_btn",
            product: "air"
          }), " para cancelar los cambios en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), " y restaurar el estado inicial."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al hacer clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_save_btn",
              product: "air"
            }), ", la configuración se mantiene incluso después de navegar a otro menú. Al hacer clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_apply_btn",
              product: "air"
            }), ", los cambios se aplican solo a la lista actual y se revierten al abandonar la página."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit_logs_submenu",
              product: "air"
            }), " no admite la ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_title",
              product: "air"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filtering-event-logs",
      children: "Filtrar registros"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Filtre los registros para encontrar rápidamente la información que necesita. Haga clic en ", (0,jsx_runtime.jsx)(IcAirLogfilter, {
        width: "20",
        height: "20",
        title: "Filters"
      }), " en la parte superior de la lista de registros. Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "logs_filters_action_btn",
        product: "air"
      }), ", seleccione el valor deseado para cada elemento."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_save_btn",
              product: "air"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action2",
              product: "air"
            }), " para guardar la configuración y que se mantenga al navegar a otro menú. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_apply_btn",
              product: "air"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action3",
              product: "air"
            }), " para aplicar los cambios solo a la lista actual; se revertirán al salir."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_reset_btn",
              product: "air"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action1",
              product: "air"
            }), " para cancelar los cambios y volver al estado inicial."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generatingReports",
      children: "Configurar informes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Genere informes de los eventos ocurridos durante un período determinado, filtrando los datos de los registros."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(IcAirReport, {
            width: "20",
            height: "20",
            title: "Report"
          }), " en la parte superior de la lista de registros."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), ", ingrese un nombre para el informe."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-setting.png"
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
          }), " para guardar el informe configurado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Se crea un informe con el nombre establecido en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-added.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para descargar el informe generado, haga clic en el botón ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Download"
          }), " junto al nombre del informe."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_title",
            product: "air"
          }), ", seleccione el período para consultar los eventos y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_button_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-download.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Se envía un enlace de descarga al correo electrónico del administrador."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), " le permite buscar, editar, descargar o eliminar los informes creados."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dataMasking",
      children: "Enmascarar datos personales"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enmascare los datos personales en los registros para proteger la información sensible. Cuando el enmascaramiento de datos personales está habilitado, información como los nombres de usuario, las direcciones de correo electrónico y los números de teléfono se oculta parcialmente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para habilitar el enmascaramiento de datos personales, haga clic en el botón ", (0,jsx_runtime.jsx)(IcAirMask, {
        width: "20",
        height: "20",
        title: "Apply Masking"
      }), " en la parte superior de la lista de registros. En el menú emergente, active ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "apply_masking_title",
        product: "air"
      }), " y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "save_btn",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-apply-masking.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "otras-funciones",
      children: "Otras funciones"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice la barra de herramientas en la parte superior de la lista para gestionar los registros de forma más eficiente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para ordenar los registros por fecha, seleccione un rango de fecha y hora y, a continuación, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_apply_btn",
            product: "air"
          }), ". Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_reset_btn",
            product: "air"
          }), " para restablecer la fecha."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-set-datetime.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En el campo de entrada ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "search_placeholder",
            product: "air"
          }), ", ingrese palabras clave específicas para buscar en los registros. Ingrese uno de los siguientes: ID de tarjeta RF, ID de usuario, correo electrónico o nombre."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Export"
          }), " para guardar los registros como un archivo CSV o PDF."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirRef, {
            width: "20",
            height: "20",
            title: "Refresh"
          }), " en la parte superior de la lista para actualizar los registros."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para actualizar a intervalos específicos, seleccione 5 segundos o 1 minuto en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auto_refresh_btn",
            product: "air"
          }), " en la parte inferior izquierda de la lista."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-auto-refresh.png"
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