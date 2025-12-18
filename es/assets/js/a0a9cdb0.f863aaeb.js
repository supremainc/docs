"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["46862"], {
13235: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_report_mdx_a0a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-report-mdx-a0a.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_report_mdx_a0a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-report","title":"Ver el informe","description":"Puede generar informes de T&A a partir de los eventos de asistencia de los usuarios recopilados en el sistema y editar los registros de tiempo o exportarlos como archivos CSV o PDF.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-report.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-report","permalink":"/docs/es/platform/biostar_x/tna-report","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-report.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-report","title":"Ver el informe","description":"Puede generar informes de T&A a partir de los eventos de asistencia de los usuarios recopilados en el sistema y editar los registros de tiempo o exportarlos como archivos CSV o PDF.","keywords":["Informe de tiempo y asistencia","Informes"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar el horario","permalink":"/docs/es/platform/biostar_x/tna-rule-schedule"},"next":{"title":"Editar informe de T&A","permalink":"/docs/es/platform/biostar_x/tna-report-edit"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-report.mdx


const frontMatter = {
	id: 'tna-report',
	title: 'Ver el informe',
	description: 'Puede generar informes de T&A a partir de los eventos de asistencia de los usuarios recopilados en el sistema y editar los registros de tiempo o exportarlos como archivos CSV o PDF.',
	keywords: [
		'Informe de tiempo y asistencia',
		'Informes'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Antes de comenzar",
  "id": "antes-de-comenzar",
  "level": 2
}, {
  "value": "Antes de usar el informe multilingüe",
  "id": "antes-de-usar-el-informe-multilingüe",
  "level": 3
}, {
  "value": "Antes de actualizar el informe",
  "id": "antes-de-actualizar-el-informe",
  "level": 3
}, {
  "value": "Comprobar el informe",
  "id": "comprobar-el-informe",
  "level": 2
}, {
  "value": "Generar el informe",
  "id": "generar-el-informe",
  "level": 3
}, {
  "value": "Configurar las condiciones de filtro",
  "id": "configurar-las-condiciones-de-filtro",
  "level": 3
}, {
  "value": "Configurar período del informe",
  "id": "configurar-período-del-informe",
  "level": 3
}, {
  "value": "Exportar informe",
  "id": "exportar-informe",
  "level": 3
}, {
  "value": "Generar informe de horas de alarma de trabajo",
  "id": "generar-informe-de-horas-de-alarma-de-trabajo",
  "level": 2
}, {
  "value": "Configuración de correo electrónico automatizado",
  "id": "configuración-de-correo-electrónico-automatizado",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
  }, {Cmd, IcSearch, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Puede generar informes de T&A a partir de los eventos de asistencia de los usuarios recopilados en el sistema y editar los registros de tiempo o exportarlos como archivos CSV o PDF."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice fácilmente los siete filtros de informe predefinidos; además, los administradores pueden configurar sus propios filtros."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "antes-de-usar-el-informe-multilingüe",
      children: "Antes de usar el informe multilingüe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " admite coreano e inglés de forma predeterminada. Para utilizar informes multilingües, configure el idioma deseado según las siguientes instrucciones."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a la siguiente ruta. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "C:\\Program Files\\BioStar X\\plugin\\ta\\dist\\setup\\report_fonts"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cree una carpeta con el nombre del idioma que desea usar. Consulte las normas ISO 639-1 para los nombres de idiomas. Por ejemplo, para usar español, cree una carpeta llamada \"es\"."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Copie y pegue las fuentes en la carpeta creada. Solo se admite una fuente TrueType."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "antes-de-actualizar-el-informe",
      children: "Antes de actualizar el informe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " utiliza MariaDB como base de datos predeterminada. Si utiliza la base de datos MS SQL Server, verifique primero los siguientes elementos."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al usar ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " con MS SQL Server, si hay muchos usuarios registrados, el uso de memoria en la PC puede acumularse cada vez que se actualiza el informe. Restablezca la memoria máxima del servidor de la base de datos MS SQL Server."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ejecute ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Microsoft SQL Server Management Studio"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic derecho en la base de datos ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " en el explorador de objetos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Propiedades"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory"
          }), " y reduzca el valor de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum server memory"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la configuración de MariaDB y MS SQL Server durante la instalación de ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "custom-install",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comprobar-el-informe",
      children: "Comprobar el informe"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generar-el-informe",
      children: "Generar el informe"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aquí se proporcionan instrucciones para generar informes de registros de asistencia de usuarios registrados."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.title",
            product: "2"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en el filtro de informe deseado en la barra lateral izquierda de la pantalla."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.userGroup",
            product: "2"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), ", haga clic en el botón ", (0,jsx_runtime.jsx)(IcSearch, {}), " y luego especifique el grupo o usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para generar el informe, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.updateReport",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando la lista de informes aparezca en la parte inferior de la pantalla, puede hacer clic en el elemento deseado para ver los detalles."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-update-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-las-condiciones-de-filtro",
      children: "Configurar las condiciones de filtro"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede configurar condiciones de filtro para generar un nuevo informe de registros de T&A."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-filter-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": Ingrese el nombre del informe."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportType",
            product: "2"
          }), ": Seleccione el tipo de informe deseado. Los tipos de informe disponibles son los siguientes."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "report.daily",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.dailySummary",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individual",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individualSummary",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.leave",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.exception",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.modifiedPunchLogHistory",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.workweek",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.report.condition.reportType",
              product: "2"
            }), " como ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individual",
              product: "2"
            }), ", puede configurar si se mostrarán los registros de entrada del usuario."]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-report-individual-types.png"
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "report.individual.optionSummary",
                  product: "2"
                }), ": Esto solo muestra los registros de entrada y salida del usuario en el informe."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "report.individual.optionDetail",
                  product: "2"
                }), ": Esto muestra todos los registros de entrada del usuario en el informe."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "grid.columnSetting",
            product: "2"
          }), ": Puede cambiar el orden de las columnas de la tabla de informe u ocultarlas."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-filter-setting-column.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Después de cambiar el orden de las columnas, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.defaultColumn",
              product: "2"
            }), " para restaurar los valores predeterminados."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report.filter",
            product: "2"
          }), ": Esto solo se activará cuando ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportType",
            product: "2"
          }), " esté configurado como ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report.leave",
            product: "2"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report.exception",
            product: "2"
          }), ", y puede elegir condiciones específicas para registros de ausencias o excepciones."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.userGroup",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), ": Seleccione el grupo de usuarios o usuario para generar el informe."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.saveFilter.button",
            product: "2"
          }), ": Puede guardar el informe de asistencia configurado como un filtro."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-filter-saving.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-período-del-informe",
      children: "Configurar período del informe"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aquí se proporcionan instrucciones para configurar el período del informe."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-period-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede establecer el período del informe como ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.daily",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.weekly",
        product: "2"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.monthly",
        product: "2"
      }), ". Para generar un informe para un período específico, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.custom",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exportar-informe",
      children: "Exportar informe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.downloadToCsv",
            product: "2"
          }), ": Puede guardar el informe generado como un archivo CSV."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.exportPdf",
            product: "2"
          }), ": Puede guardar el informe generado como un archivo PDF."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generar-informe-de-horas-de-alarma-de-trabajo",
      children: "Generar informe de horas de alarma de trabajo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede generar informes de T&A para los usuarios que hayan alcanzado las horas laborales designadas o notificar al administrador por correo electrónico. El informe de horas laborales de alerta se genera semanalmente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.title",
            product: "2"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Working Alarm Time Report"
          }), " en la lista de filtros de la barra lateral izquierda."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-working-alarm.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure cada elemento en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.filterConditions",
            product: "2"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportPeriod",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para generar el informe, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.updateReport",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para enviar notificaciones al administrador por correo electrónico para los usuarios que hayan alcanzado las horas laborales designadas, configure ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ta.report.condition.autoEmail",
          product: "2"
        }), ". Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#autoEmail",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuración-de-correo-electrónico-automatizado",
      children: "Configuración de correo electrónico automatizado"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede enviar automáticamente correos electrónicos de alarma al administrador para los usuarios que hayan alcanzado las horas laborales designadas."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-working-alarm-auto-email.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.email",
            product: "2"
          }), ": Marque la casilla para enviar correos electrónicos automáticamente al administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.dst.dayOfWeek",
            product: "2"
          }), ": Seleccione el día de la semana para enviar correos electrónicos al administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.time",
            product: "2"
          }), ": Configure la hora para enviar correos electrónicos al administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.recipient",
            product: "2"
          }), ": Puede especificar el administrador que recibirá el correo electrónico. Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.edit",
            product: "2"
          }), " para abrir la ventana emergente ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.recipient",
            product: "2"
          }), ". Ingrese la dirección de correo electrónico. Puede especificar más de un administrador."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-working-alarm-auto-email-receipt.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Establezca las condiciones de filtro y luego guarde el filtro para configurar la función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.report.condition.autoEmail",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configure la información del remitente de los correos electrónicos enviados automáticamente en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.setting",
              product: "2"
            }), "(", (0,jsx_runtime.jsx)(IcSet, {}), ") → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.triggerAction.senderInfor",
              product: "2"
            }), " en la barra lateral izquierda de la pantalla. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-settings#senderInfo",
              children: "lo siguiente"
            }), "."]
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