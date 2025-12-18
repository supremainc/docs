"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["45507"], {
8004: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_dashboard_adding_widget_mdx_abb_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-dashboard-adding-widget-mdx-abb.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_dashboard_adding_widget_mdx_abb_namespaceObject = JSON.parse('{"id":"platform/biostar_x/dashboard-adding-widget","title":"Agregar widgets","description":"El panel es una pantalla de monitoreo personalizable donde los usuarios pueden organizar libremente la información que deseen.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/dashboard-adding-widget.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/dashboard-adding-widget","permalink":"/docs/es/platform/biostar_x/dashboard-adding-widget","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/dashboard-adding-widget.mdx","tags":[],"version":"current","frontMatter":{"id":"dashboard-adding-widget","title":"Agregar widgets","description":"El panel es una pantalla de monitoreo personalizable donde los usuarios pueden organizar libremente la información que deseen.","keywords":["Tablero","Widget"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Tablero","permalink":"/docs/es/platform/biostar_x/how-to-guide-dashboard"},"next":{"title":"Editar Widget","permalink":"/docs/es/platform/biostar_x/dashboard-edit-widget"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/dashboard-adding-widget.mdx


const frontMatter = {
	id: 'dashboard-adding-widget',
	title: 'Agregar widgets',
	description: 'El panel es una pantalla de monitoreo personalizable donde los usuarios pueden organizar libremente la información que deseen.',
	keywords: [
		'Tablero',
		'Widget'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar widgets",
  "id": "add-widgets",
  "level": 2
}, {
  "value": "Tipos de widgets",
  "id": "widget-types",
  "level": 2
}, {
  "value": "Gráfico",
  "id": "chart",
  "level": 3
}, {
  "value": "Contador",
  "id": "bar",
  "level": 3
}, {
  "value": "Texto",
  "id": "text",
  "level": 3
}, {
  "value": "Eventos en tiempo real",
  "id": "realtime-events",
  "level": 3
}, {
  "value": "Monitoreo de acceso en tiempo real",
  "id": "real-time-access-monitoring",
  "level": 3
}, {
  "value": "Estado de uso del sistema",
  "id": "system-usage-status",
  "level": 3
}, {
  "value": "Control de puertas",
  "id": "door-control",
  "level": 3
}, {
  "value": "Definir intervalo de actualización de datos del widget",
  "id": "widget-refresh-interval",
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
  }, {Cmd, IcSet2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet2) _missingMdxReference("IcSet2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["El panel de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " es una pantalla de monitoreo personalizable donde los usuarios pueden organizar libremente la información que deseen. Agrega distintos widgets para configurar la información clave del sistema de control de acceso según tu entorno de trabajo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los tipos de widgets disponibles son los siguientes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gráfico"
          }), ": Visualiza los datos de eventos de acceso en gráficos de barras, líneas o pastel"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Contador"
          }), ": Muestra la cantidad de eventos por día o semana en números"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Eventos en tiempo real"
          }), ": Monitorea todos los eventos que ocurren en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " en tiempo real"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoreo de acceso en tiempo real"
          }), ": Muestra en tiempo real la información del usuario que se autentica correctamente en dispositivos específicos"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Estado de uso del sistema"
          }), ": Muestra en números el estado de registro de usuarios, dispositivos, puntos de acceso, etc."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Control de puertas"
          }), ": Verifica el estado de los puntos de acceso seleccionados y contrólalos de forma remota"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Texto"
          }), ": Coloca texto personalizado, como anuncios o títulos de widgets"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los widgets colocados en el panel ofrecen las siguientes ventajas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuración personalizada"
          }), ": Selecciona solo la información necesaria para el trabajo y organízala en una sola pantalla"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoreo en tiempo real"
          }), ": Verifica al instante los eventos de acceso y el estado del sistema"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visualización intuitiva"
          }), ": Representa los datos mediante gráficos y contadores"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gestión eficiente"
          }), ": Mejora la eficiencia del trabajo al integrar funciones de monitoreo y control"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-widgets",
      children: "Agregar widgets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agrega widgets en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), " para consultar la información que necesites."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addWidget",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-dashboard-add-widget.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addNewWidget",
            product: "2"
          }), ", selecciona el elemento deseado en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetType",
            product: "2"
          }), " e ingresa o define los campos requeridos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-dashboard-add-widget-type.png",
          width: 400
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Completa la configuración del widget y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Una vez creado el widget en el área de visualización, ajusta su tamaño o colócalo en la ubicación deseada."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de terminar todos los ajustes, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply",
            product: "2"
          }), " en la esquina superior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si ya agregaste un widget, haz clic en el ícono ", (0,jsx_runtime.jsx)(IcSet2, {}), " en la esquina superior derecha de la pantalla. Una vez que entres en el modo ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.dashboardSettings",
          product: "2"
        }), ", haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.addWidget",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "widget-types",
      children: "Tipos de widgets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "El tamaño predeterminado varía según el widget y está optimizado para verse mejor en ese tamaño."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Todos los widgets se pueden redimensionar arrastrando la esquina inferior derecha."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-adjust-win-size.png",
          caption: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chart",
      children: "Gráfico"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Al seleccionar los datos de gráfico deseados, se muestra en el gráfico la cantidad de eventos ocurridos."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-chart.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.chartData",
            product: "2"
          }), ": En la lista de eventos diarios o semanales, selecciona los datos de gráfico deseados."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAPBViolation",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAPBViolation",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartType",
            product: "2"
          }), ": Selecciona el tipo deseado entre ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.verticalBar",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.horizontalBar",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.line",
            product: "2"
          }), ", y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.pie",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartColorSchemes",
            product: "2"
          }), ": Selecciona el color deseado entre los 5 esquemas de color."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Los gráficos que se muestran al seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.chartColorSchemes",
          product: "2"
        }), " utilizan valores aleatorios para la vista previa; no son valores reales."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bar",
      children: "Contador"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Al seleccionar los datos de contador deseados, se muestra como número la cantidad de eventos ocurridos."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-counter.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.counterData",
            product: "2"
          }), ": En la lista de eventos diarios o semanales, selecciona los datos de contador deseados."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAPBViolation",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAPBViolation",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text",
      children: "Texto"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ingresa y coloca el texto deseado en el área de widgets de ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), ". Después de crearlo, colócalo en la ubicación necesaria y úsalo como título de un widget o como aviso."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-text.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si seleccionas la opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.text.removeBackground",
          product: "2"
        }), " al crear un widget ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.text",
          product: "2"
        }), ", se aplicará transparencia al fondo."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "realtime-events",
      children: "Eventos en tiempo real"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Muestra los eventos que ocurren en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " en tiempo real. Verifica eventos filtrando eventos específicos, usuarios, puertas y dispositivos."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-real-time-event.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.pause",
            product: "2"
          }), ": Pausar el evento en tiempo real."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.play",
            product: "2"
          }), ": Reanudar el evento en tiempo real que se detuvo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.clear",
            product: "2"
          }), ": Se eliminará todo el registro capturado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si navegas a otra página y regresas a ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.dashboard"
        }), ", la lista se borrará y los eventos se registrarán nuevamente."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-time-access-monitoring",
      children: "Monitoreo de acceso en tiempo real"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Selecciona un dispositivo y muestra la foto de perfil e información (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.user",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.date",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.device",
        product: "2"
      }), ") del usuario que se autentique correctamente en tiempo real."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-checkpoint.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.pause",
            product: "2"
          }), ": Pausar el punto de control."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.play",
            product: "2"
          }), ": Reanudar el punto de control que se pausó."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.clear",
            product: "2"
          }), ": Se eliminará todo el registro capturado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Se registran hasta 5 personas en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.checkpoint",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-usage-status",
      children: "Estado de uso del sistema"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los distintos estados de uso de BioStar X se muestran en números."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-system-usage.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.widgetTypes.systemUsage",
        product: "2"
      }), " que se pueden mostrar son los siguientes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.users",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.cards",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.fingerprint",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.visualFace",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.face",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.qrBarcode",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.mobileAccessCard",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.devices",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.doors",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.zones",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.accessGroups",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.userGroups",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.deviceGroups",
          product: "2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "door-control",
      children: "Control de puertas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Selecciona una puerta para verificar y controlar su estado."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-door-control.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los siguientes elementos se pueden controlar con los botones ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.doorControl.actionsBtn",
        product: "2"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.open",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.normalize",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.lock",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.unlock",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.clearAlarm",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.clearAPB",
          product: "2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["El nombre del widget ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.doorControl",
          product: "2"
        }), " se asigna automáticamente al nombre de la puerta y no puede modificarse."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "widget-refresh-interval",
      children: "Definir intervalo de actualización de datos del widget"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede configurar el intervalo de actualización de datos de los widgets agregados al panel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el icono ", (0,jsx_runtime.jsx)(IcSet2, {}), " en la esquina superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez que ingrese al modo ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.dashboardSettings",
            product: "2"
          }), ", configure ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.autoRefreshInterval",
            product: "2"
          }), " en la configuración general en la parte inferior de la pantalla."]
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