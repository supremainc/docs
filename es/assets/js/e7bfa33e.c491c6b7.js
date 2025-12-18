"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["80344"], {
68819: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_data_generate_reports_mdx_e7b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-data-generate-reports-mdx-e7b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_data_generate_reports_mdx_e7b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/data-generate-reports","title":"Generar reporte","description":"Los informes se crean en el formato deseado.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/data-generate-reports.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/data-generate-reports","permalink":"/docs/es/platform/biostar_x/data-generate-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/data-generate-reports.mdx","tags":[],"version":"current","frontMatter":{"id":"data-generate-reports","title":"Generar reporte","description":"Los informes se crean en el formato deseado.","keywords":["Informe","Plantilla"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Fecha","permalink":"/docs/es/platform/biostar_x/how-to-guide-data"},"next":{"title":"Programación automática de reportes","permalink":"/docs/es/platform/biostar_x/data-automatic-report-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/data-generate-reports.mdx


const frontMatter = {
	id: 'data-generate-reports',
	title: 'Generar reporte',
	description: 'Los informes se crean en el formato deseado.',
	keywords: [
		'Informe',
		'Plantilla'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ver todos los eventos",
  "id": "ver-todos-los-eventos",
  "level": 2
}, {
  "value": "Establecer período",
  "id": "establecer-período",
  "level": 3
}, {
  "value": "Establecer condiciones de consulta",
  "id": "establecer-condiciones-de-consulta",
  "level": 3
}, {
  "value": "Borrar condiciones de consulta",
  "id": "borrar-condiciones-de-consulta",
  "level": 3
}, {
  "value": "Ver video del evento",
  "id": "ver-video-del-evento",
  "level": 3
}, {
  "value": "Exportar a CSV",
  "id": "exportar-a-csv",
  "level": 3
}, {
  "value": "Ver historial de alarmas",
  "id": "ver-historial-de-alarmas",
  "level": 2
}, {
  "value": "Establecer período",
  "id": "establecer-período-1",
  "level": 3
}, {
  "value": "Establecer condiciones de consulta",
  "id": "establecer-condiciones-de-consulta-1",
  "level": 3
}, {
  "value": "Borrar condiciones de consulta",
  "id": "borrar-condiciones-de-consulta-1",
  "level": 3
}, {
  "value": "Consulta de informe de usuario",
  "id": "consulta-de-informe-de-usuario",
  "level": 2
}, {
  "value": "Generar informe personalizado",
  "id": "custom-report",
  "level": 2
}, {
  "value": "Gestión de informes",
  "id": "report-management",
  "level": 2
}, {
  "value": "Guardar informe",
  "id": "guardar-informe",
  "level": 3
}, {
  "value": "Guardar archivo de informe",
  "id": "guardar-archivo-de-informe",
  "level": 3
}, {
  "value": "Imprimir informe",
  "id": "imprimir-informe",
  "level": 3
}, {
  "value": "Eliminar informe",
  "id": "eliminar-informe",
  "level": 3
}, {
  "value": "Configurar columnas",
  "id": "configurar-columnas",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
  }, {Cmd, Column, Columns, IcBw2, IcClose, IcFilter2, IcFirst2, IcFw2, IcLast2, IcMoreW, IcRepTrash, IcRepoEdit, IcReportVid, IcSearch, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcBw2) _missingMdxReference("IcBw2", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFilter2) _missingMdxReference("IcFilter2", true);
  if (!IcFirst2) _missingMdxReference("IcFirst2", true);
  if (!IcFw2) _missingMdxReference("IcFw2", true);
  if (!IcLast2) _missingMdxReference("IcLast2", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcRepTrash) _missingMdxReference("IcRepTrash", true);
  if (!IcRepoEdit) _missingMdxReference("IcRepoEdit", true);
  if (!IcReportVid) _missingMdxReference("IcReportVid", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede ver todos los eventos que ocurrieron en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " o solo el historial de alarmas. Puede filtrar y generar informes personalizados según las condiciones definidas por el usuario."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), " o seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), " en la lista de accesos directos en la parte superior izquierda de la pantalla en la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-todos-los-eventos",
      children: "Ver todos los eventos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede ver todos los eventos que ocurrieron en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.events"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.allEvents"
      }), " en la barra lateral izquierda de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-generate-report.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para revisar la página anterior o siguiente de los resultados listados, haga clic en ", (0,jsx_runtime.jsx)(IcFw2, {}), " o ", (0,jsx_runtime.jsx)(IcBw2, {}), " en la esquina superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para cambiar la cantidad de filas que se muestran en la lista, haga clic en el menú desplegable en la esquina superior derecha de la pantalla y seleccione el valor deseado. Puede seleccionar un mínimo de 25 filas y un máximo de 200 filas."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-rows.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "establecer-período",
      children: "Establecer período"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede establecer el período deseado en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.header.customReport.period"
      }), " en la esquina superior izquierda de la pantalla. Haga clic en el área de fecha."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-select-period.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Puede seleccionar períodos predefinidos desde hoy que abarcan de 1 a 6 meses. Los eventos que ocurrieron durante el período seleccionado se mostrarán automáticamente en la lista."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.rollCall.userDefined"
          }), ", también puede establecer manualmente el período deseado. Cuando aparezca la ventana de selección de período, establezca la fecha de inicio, la fecha de finalización y la hora, luego haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.ok"
          }), ". Los eventos que ocurrieron durante el período establecido aparecerán automáticamente en la lista."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-custom-period.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para seleccionar la fecha de hoy, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.dialog.rollCall.today"
            }), "."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "establecer-condiciones-de-consulta",
      children: "Establecer condiciones de consulta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede filtrar la lista estableciendo las condiciones deseadas en la sección de encabezado de la lista de consulta. Puede establecer condiciones para todos los elementos excepto las fechas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección de encabezado de la lista de eventos, haga clic en el botón ", (0,jsx_runtime.jsx)(IcFilter2, {}), " de la columna deseada."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando aparezca la ventana de condiciones de filtro, seleccione los elementos deseados."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez completada la selección, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCondition",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solo se mostrarán en la lista los eventos que coincidan con las condiciones seleccionadas."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-filtered.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "borrar-condiciones-de-consulta",
      children: "Borrar condiciones de consulta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para borrar las condiciones de consulta establecidas, haga clic en el botón ", (0,jsx_runtime.jsx)(IcClose, {}), " en el conjunto de condiciones debajo de la sección de encabezado. Las condiciones establecidas se borrarán y todos los eventos se mostrarán nuevamente en la lista."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-disable-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ver-video-del-evento",
      children: "Ver video del evento"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si hay una cámara conectada a un dispositivo donde ocurrió un evento específico en la lista de eventos, la columna ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.column.customReport.view"
      }), " mostrará el icono ", (0,jsx_runtime.jsx)(IcReportVid, {}), " para ese evento. Al hacer clic en el icono, puede ver el video del momento en que ocurrió el evento a través de una ventana emergente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-video-log.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si ha conectado más de una cámara en la configuración de reglas de cámara, se reproducirá el video de la primera cámara. Para obtener más información sobre la configuración de reglas de cámara, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Esta función está disponible con opciones adicionales en la licencia ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " o superior. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para información sobre la vinculación de puertas y cámaras, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exportar-a-csv",
      children: "Exportar a CSV"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede exportar la lista de eventos consultados como un archivo CSV. Haga clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "menu.csvDownload",
        product: "2"
      }), " en la esquina superior derecha de la pantalla. Puede descargar el archivo CSV a su PC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["El formato de nombre del archivo CSV es ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Report_YYYYMMDD_hash.csv"
        }), ". (Por ejemplo, ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Report_20251002_94a85b7519664378b4b39b879f1e81b7.csv"
        }), ")"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-historial-de-alarmas",
      children: "Ver historial de alarmas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Solo puede ver el historial de alarmas (alertas). Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.events"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.alertHistory"
      }), " en la barra lateral izquierda de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-lists.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para revisar la página anterior o siguiente de los resultados listados, haga clic en ", (0,jsx_runtime.jsx)(IcFw2, {}), " o ", (0,jsx_runtime.jsx)(IcBw2, {}), " en la esquina superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para ir a la primera o última página de la lista consultada, haga clic en ", (0,jsx_runtime.jsx)(IcFirst2, {}), " o ", (0,jsx_runtime.jsx)(IcLast2, {}), " en la esquina superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para cambiar la cantidad de filas que se muestran en la lista, haga clic en el menú desplegable en la esquina superior derecha de la pantalla y seleccione el valor deseado. Puede seleccionar un mínimo de 25 filas y un máximo de 200 filas."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-rows.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la revisión de eventos de alarma (alerta) en el monitoreo de eventos, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "monitoring-event",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "establecer-período-1",
      children: "Establecer período"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede establecer el período deseado y consultar el historial de alarmas que ocurrieron durante ese período. En la columna ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportHeader.datetime",
        product: "2"
      }), " de la lista consultada, haga clic en el botón ", (0,jsx_runtime.jsx)(IcFilter2, {}), ". Cuando aparezca la ventana de selección de período, establezca la fecha de inicio, la fecha de finalización y la hora, luego haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.button.ok"
      }), ". Los eventos que ocurrieron durante el período establecido aparecerán automáticamente en la lista."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-set-custom-period.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para seleccionar la fecha de hoy, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "data.dialog.rollCall.today"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "establecer-condiciones-de-consulta-1",
      children: "Establecer condiciones de consulta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede filtrar la lista estableciendo las condiciones deseadas en la sección de encabezado de la lista de consulta. Puede establecer condiciones para todos los elementos excepto las fechas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección de encabezado de la lista de eventos, haga clic en el botón ", (0,jsx_runtime.jsx)(IcFilter2, {}), " de la columna deseada."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando aparezca la ventana de condiciones de filtro, seleccione los elementos deseados."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez completada la selección, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCondition",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solo se mostrarán en la lista los eventos que coincidan con las condiciones seleccionadas."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-events-filtered.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "borrar-condiciones-de-consulta-1",
      children: "Borrar condiciones de consulta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para borrar las condiciones de consulta establecidas, haga clic en el botón ", (0,jsx_runtime.jsx)(IcClose, {}), " en el conjunto de condiciones debajo de la sección de encabezado. Las condiciones establecidas se borrarán y todos los eventos se mostrarán nuevamente en la lista."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-events-disable-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consulta-de-informe-de-usuario",
      children: "Consulta de informe de usuario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede seleccionar plantillas relacionadas con usuarios para generar informes. En la barra lateral izquierda de la pantalla, haga clic en la plantilla deseada bajo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.user"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--30",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-user-report.png"
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l10",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersInformation"
              }), ": Puede ver información detallada del usuario en formato de lista."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersInDevice"
              }), ": Puede ver información de los usuarios registrados en el dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.userDetail"
              }), ": Puede ver información detallada del usuario en formato de tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.userPhotoGallery"
              }), ": Puede ver las fotos de perfil de los usuarios en formato de galería."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersWithoutCredential"
              }), ": Puede ver a los usuarios que no han configurado credenciales."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.privateAuthModeByUser"
              }), ": Puede ver la configuración de modos de autenticación privada específicos de cada usuario."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.numberOfCredentialsByUser"
              }), ": Puede ver la cantidad de credenciales configuradas para el usuario."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.allCards"
              }), ": Puede ver usuarios según las tarjetas enroladas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.unassignedCards"
              }), ": Puede ver las tarjetas que no se han asignado a usuarios."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.blacklistCards"
              }), ": Puede ver las tarjetas deshabilitadas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.expiredUsers"
              }), ": Puede ver a los usuarios cuya fecha de vencimiento ha pasado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersToBeExpiredInNDays"
              }), ": Puede ver a los usuarios cuya fecha de vencimiento se aproxima en N días. Puede ingresar directamente el número de días antes de generar el informe."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.report.idleUsersWithValue"
              }), ": Puede ver a los usuarios que no han tenido registros de acceso durante los últimos N meses. Puede ingresar directamente el número de meses antes de generar el informe."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.inactiveUsers"
              }), ": Puede ver a los usuarios inactivos."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El informe generado se puede guardar en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.savedReports"
            }), ". Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.button.saveReport"
            }), " en la esquina superior izquierda del informe."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la gestión de informes, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#report-management",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "custom-report",
      children: "Generar informe personalizado"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede filtrar y generar informes personalizados según las condiciones deseadas. Guarde el informe generado como plantilla para utilizarlo fácilmente cuando genere informes con las mismas condiciones en el futuro."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.sidebar.events"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.sidebar.customReport"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.customReport.events"
          }), ", seleccione los eventos deseados."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-filter.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de completar la selección de eventos, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-select-items.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Busque los elementos deseados en el campo de búsqueda (", (0,jsx_runtime.jsx)(IcSearch, {}), ")."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcRepTrash, {}), " en la lista de la derecha para excluir los elementos seleccionados."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Establezca el periodo de consulta y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-period.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.static"
              }), ": Establezca una fecha y hora específicas para definir el periodo de consulta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.dynamic"
              }), ": Establezca la fecha de inicio, la fecha de finalización y la hora basadas en hoy. Es útil al generar informes de forma repetitiva para un periodo específico."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure las condiciones según usuarios, puertas y dispositivos, agrupados o individualmente."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-select-filters.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcRepTrash, {}), " en la lista de la derecha para excluir los elementos seleccionados."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione las condiciones deseadas y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "En la ventana de configuración de columnas, seleccione las columnas que se mostrarán en el informe."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-columns.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de seleccionar las columnas, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.button.generate"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete la creación del informe personalizado."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcRepoEdit, {}), " en la parte superior del informe para modificar el título, los eventos, el periodo y las condiciones de filtro."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cambie también el título del informe en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.savedReports"
            }), " en la barra lateral izquierda de la pantalla. Seleccione el informe personalizado cuyo título desee cambiar y haga clic con el botón derecho. Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.renameSavedReport"
            }), " en el menú emergente."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-data-custom-report-rename.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la gestión de informes, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#report-management",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "report-management",
      children: "Gestión de informes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guardar-informe",
      children: "Guardar informe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.saveReport"
      }), " para guardar el informe generado como plantilla. Consulte los informes guardados en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.savedReports"
      }), " en la barra lateral izquierda de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-saved.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guardar-archivo-de-informe",
      children: "Guardar archivo de informe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.export"
      }), " para exportar el informe como archivo PDF o CSV. Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.exportReport"
      }), ", configure cada elemento y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.export"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-export.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imprimir-informe",
      children: "Imprimir informe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.print"
      }), " para imprimir el informe con una impresora conectada a su PC. Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.printReport"
      }), ", configure cada elemento y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.print"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-print.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La pantalla de vista previa de impresión aparece en una pestaña nueva del navegador web. Haga clic en el botón Imprimir en la parte superior derecha de la pantalla para iniciar la impresión."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eliminar-informe",
      children: "Eliminar informe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Seleccione el informe guardado que desea eliminar en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.savedReports"
      }), " en la barra lateral izquierda y haga clic con el botón derecho. Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.deleteSavedReport"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-remove.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-columnas",
      children: "Configurar columnas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la configuración de columnas mostradas en el informe. En la configuración de columnas, seleccione las columnas que se mostrarán o cambie su orden."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.customReport.columns"
          }), " en la parte superior derecha del informe."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), ", seleccione o deseleccione las columnas deseadas."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-column-setting.png"
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
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.button.defaultColumn",
              product: "2"
            }), " para restablecer el diseño de columnas."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Según el informe generado, las columnas que se puedan seleccionar o deseleccionar pueden variar."
          }), "\n"]
        }), "\n"]
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