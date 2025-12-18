"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["59343"], {
28265: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_map_mdx_95c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-map-mdx-95c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_map_mdx_95c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-map","title":"Mapa de monitoreo","description":"Esta guía explica cómo monitorear y controlar el estado en tiempo real de puertas y cámaras por zona y piso mediante la función de monitoreo de mapas. Gestione visualmente las áreas y las estructuras de pisos vinculadas al mapa GIS, utilizando varias funciones como control de acceso y reproducción de video de cámaras.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-map.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-map","permalink":"/docs/es/platform/biostar_x/monitoring-map","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-map.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-map","title":"Mapa de monitoreo","description":"Esta guía explica cómo monitorear y controlar el estado en tiempo real de puertas y cámaras por zona y piso mediante la función de monitoreo de mapas. Gestione visualmente las áreas y las estructuras de pisos vinculadas al mapa GIS, utilizando varias funciones como control de acceso y reproducción de video de cámaras.","keywords":["Monitorizar","Mapa","Zona","Planta"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Gestionar el control de acceso avanzado","permalink":"/docs/es/platform/biostar_x/control-zone"},"next":{"title":"Supervisar dispositivo","permalink":"/docs/es/platform/biostar_x/monitoring-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-map.mdx


const frontMatter = {
	id: 'monitoring-map',
	title: 'Mapa de monitoreo',
	description: 'Esta guía explica cómo monitorear y controlar el estado en tiempo real de puertas y cámaras por zona y piso mediante la función de monitoreo de mapas. Gestione visualmente las áreas y las estructuras de pisos vinculadas al mapa GIS, utilizando varias funciones como control de acceso y reproducción de video de cámaras.',
	keywords: [
		'Monitorizar',
		'Mapa',
		'Zona',
		'Planta'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Componentes y opciones",
  "id": "component-and-options",
  "level": 2
}, {
  "value": "Componente",
  "id": "component",
  "level": 3
}, {
  "value": "Opciones",
  "id": "options",
  "level": 3
}, {
  "value": "Verifica el estado",
  "id": "verifica-el-estado",
  "level": 3
}, {
  "value": "Abrir mapa",
  "id": "open-map",
  "level": 2
}, {
  "value": "Ajuste de tamaño y reubicación del mapa",
  "id": "resize-map",
  "level": 2
}, {
  "value": "Entrar al piso",
  "id": "entry-floor",
  "level": 2
}, {
  "value": "Moverse a otro piso",
  "id": "move-to-another-floor",
  "level": 2
}, {
  "value": "Controlar la cámara",
  "id": "control-camera",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    img: "img",
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
  }, {Cmd, IcAlert, IcBack, IcCamFail, IcCamOk, IcClose, IcErr, IcFLockDr, IcFUlockDr, IcMapmore, IcMove, IcZoom, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlert) _missingMdxReference("IcAlert", true);
  if (!IcBack) _missingMdxReference("IcBack", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcFLockDr) _missingMdxReference("IcFLockDr", true);
  if (!IcFUlockDr) _missingMdxReference("IcFUlockDr", true);
  if (!IcMapmore) _missingMdxReference("IcMapmore", true);
  if (!IcMove) _missingMdxReference("IcMove", true);
  if (!IcZoom) _missingMdxReference("IcZoom", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía explica cómo monitorear y controlar el estado en tiempo real de puertas y cámaras por zona y piso mediante la función de monitoreo de mapas. El monitoreo de mapas permite navegar fácilmente por áreas y pisos a través de una interfaz visual integrada con Google Maps, habilitando funciones como el control de puertas de acceso y la reproducción de video de cámaras."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para acceder a la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), ", haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " o selecciona ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " en el menú de la parte superior izquierda de la pantalla."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " se pueden configurar múltiples instalaciones dentro de una sola área. Cada instalación puede tener varios pisos configurados. En un piso, puede configurar la puerta y la cámara según el plano para su monitoreo. Consulte lo siguiente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Area structure",
        src: (__webpack_require__(69796)/* ["default"] */.A) + "",
        width: "2743",
        height: "1771"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede acceder al área configurada en el mapa GIS en el orden Área → Instalación → Piso, como se muestra en la imagen, para monitorear y controlar puertas y cámaras. Esta estructura también se puede ver en la barra lateral de la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Monitoring sidebar",
        src: (__webpack_require__(43593)/* ["default"] */.A) + "",
        width: "400",
        height: "395"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre cómo configurar el mapa, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-map-management",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "component-and-options",
      children: "Componentes y opciones"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "component",
      children: "Componente"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los componentes que se muestran en el mapa incluyen el área, las instalaciones y las cámaras conectadas a las instalaciones. Puede acceder al piso a través de la instalación. Puede verificar la puerta y la cámara en el piso."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-map-main.png"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Componente"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "Facility icon",
                src: (__webpack_require__(2684)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Instalación"
              }), ": Haga clic en una instalación ubicada en el mapa para ingresar al piso configurado correspondiente."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "Door icon",
                src: (__webpack_require__(18248)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Puerta"
              }), ": Haga clic en una puerta ubicada en el mapa para mostrar un menú emergente y controlar esa puerta. Para obtener más información sobre las funciones disponibles, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "control-door",
                children: "lo siguiente"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "Camera icon",
                src: (__webpack_require__(21006)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Cámara"
              }), ": Haga clic en la cámara para reproducir el video de la instalación o piso correspondiente."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "Camera error icon",
                src: (__webpack_require__(16920)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Error de cámara"
              }), ": Este mensaje aparece cuando la cámara no está conectada o está apagada."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcFUlockDr, {
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Puerta abierta"
              }), ": La puerta ubicada en el piso está en estado abierto."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcFLockDr, {
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Puerta bloqueada"
              }), ": La puerta ubicada en el piso está bloqueada."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "options",
      children: "Opciones"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Las opciones disponibles en el mapa o la capa son las siguientes."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Función"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: [(0,jsx_runtime.jsx)(_components.img, {
                alt: "Zoom/Reduce",
                src: (__webpack_require__(44678)/* ["default"] */.A) + "",
                width: "24",
                height: "51"
              }), " / ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "Zoom/Reduce",
                src: (__webpack_require__(30129)/* ["default"] */.A) + "",
                width: "51",
                height: "24"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Puede acercar o alejar haciendo clic en los botones ubicados en la parte superior izquierda y en la inferior derecha del mapa. También puede usar la rueda del ratón para acercar o alejar el mapa."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcZoom, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Puede acercar o alejar haciendo clic en los botones ubicados en la parte inferior derecha del piso."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcMapmore, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Haga clic en el botón para acceder a funciones adicionales."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcClose, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Para cerrar el mapa o el piso situado en la ventana de video, haga clic en el botón de la parte superior derecha."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcMove, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Al hacer clic y arrastrar mientras mantiene presionado el icono, puede mover el mapa a otra ubicación."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Puede mover la posición arrastrando el ratón mientras hace clic en el mapa. Puede acercar o alejar usando la rueda del ratón."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga doble clic en el mapa para expandirlo a pantalla completa. Haga doble clic nuevamente o presione la tecla ", (0,jsx_runtime.jsx)(Kbd, {
              children: "ESC"
            }), " para volver al tamaño original."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verifica-el-estado",
      children: "Verifica el estado"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En la barra lateral izquierda puede verificar el estado de cada puerta y cámara de las instalaciones o pisos. Consulta la información siguiente para el estado de cada icono."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Ícono de estado"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcErr, {
                width: "35px",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hay un error del servidor de comunicación o se perdió la conexión."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcAlert, {
                width: "40px",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Se ha producido una alarma en la puerta. Si se detecta merodeo o intrusión, se mostrará el icono correspondiente."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamOk, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "La cámara está conectada."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamFail, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "La cámara está apagada o desconectada."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-map",
      children: "Abrir mapa"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si el área está vinculada al mapa GIS, puede mostrar el mapa en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "En la barra lateral izquierda, seleccione la instalación para verla en el mapa."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic con el botón derecho."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openMap"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El mapa del área seleccionada se mostrará en la ventana de video de la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-open-map.png",
      alt: "Abrir mapa"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "También puede abrir el mapa haciendo doble clic en la instalación correspondiente en la barra lateral izquierda."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La imagen es una pantalla de ejemplo. La pantalla real puede diferir."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo configurar áreas vinculadas al mapa GIS, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-area",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resize-map",
      children: "Ajuste de tamaño y reubicación del mapa"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para ajustar el tamaño del mapa, haga clic en un área vacía del mapa. En cada esquina aparecerán manijas para cambiar el tamaño. Haga clic y arrastre la manija para ajustarla al tamaño deseado."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-monitoring-map-resize.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para mover el mapa a otra ubicación mientras cambia su tamaño, haga clic en el icono ", (0,jsx_runtime.jsx)(IcMove, {}), " sobre el mapa y arrástrelo a la posición deseada."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-monitoring-map-move.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "entry-floor",
      children: "Entrar al piso"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para ingresar a un piso en el mapa, haga clic en la instalación. Cuando se muestre la lista de pisos accesibles desde el menú emergente, seleccione el piso deseado. Puede verificar los planos, las puertas y las cámaras en el piso seleccionado."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["O bien, haga doble clic en el piso en la barra lateral izquierda o haga clic con el botón derecho y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openMap"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-select-floor.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al hacer clic en la puerta se mostrará un menú emergente que le permite controlar esa puerta. Para obtener más información sobre las funciones disponibles, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "control-door",
            children: "lo siguiente"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-map-floor-control-door.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Al hacer doble clic en la cámara, se reproduce la transmisión en vivo."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/monitoring-map-select-floor-play-video.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo configurar puertas y cámaras en el piso, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-floor",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para navegar al mapa que muestra la instalación, haga clic en el botón ", (0,jsx_runtime.jsx)(IcBack, {}), " en la parte superior izquierda."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre los métodos de control de video y las herramientas que se muestran en el video, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video#control-video",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La imagen es una pantalla de ejemplo. La pantalla real puede diferir."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "move-to-another-floor",
      children: "Moverse a otro piso"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para moverse a otro piso, haga clic en la opción de selección en la esquina superior izquierda del mapa y seleccione el piso al que desea ir."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/monitoring-map-select-floor-list-box.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para navegar al mapa que muestra la instalación, haga clic en el botón ", (0,jsx_runtime.jsx)(IcBack, {}), " en la parte superior izquierda."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción de selección de piso en la parte superior izquierda del mapa muestra solo los pisos configurados para la instalación. Si el piso no está configurado en la instalación, no aparecerá en la lista. Para obtener más información sobre cómo configurar pisos en la instalación, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-facility",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-camera",
      children: "Controlar la cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para controlar la cámara en el mapa o piso, haga clic en el ícono de la cámara. Seleccione la función deseada en el menú emergente."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-map-camera-popup.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.playVideo"
              }), ": Puede ver el video de la cámara en tiempo real."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.showCoverage"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.hideCoverage"
              }), ": Puede mostrar u ocultar el rango de cobertura de la cámara."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.door.viewDetail"
              }), ": Puede ver información detallada sobre la cámara. Muestra el nombre, grupo, ID, dirección IP, etc., de la cámara en el panel derecho."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para colocar y reproducir la transmisión de la cámara en el mosaico de video, haga doble clic en la cámara en la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.map.title"
          }), " en la barra lateral izquierda de la pantalla. O haga clic derecho y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openVideo"
          }), " en el menú emergente."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-map-open-camera.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para ver información detallada como el nombre y el grupo de la cámara, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.viewDetail"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los mosaicos de video se añaden en orden desde la parte superior izquierda de la pantalla. Si no hay espacio para añadir más, aparece un mensaje de error."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre los métodos de control de video y las herramientas que se muestran en el video, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video#control-video",
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
2684: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiM5MzM2RkYiLz4KPHBhdGggZD0iTTMzLjc1IDkuMzc1QzMzLjc0NDEgOS4xMjgyMyAzMy42NDM0IDguODkzMjIgMzMuNDY4OCA4LjcxODY3QzMzLjI5NDMgOC41NDQxMyAzMy4wNTkzIDguNDQzNDUgMzIuODEyNSA4LjQzNzVIMTIuMTg3NUMxMS45NDA3IDguNDQzNDUgMTEuNzA1NyA4LjU0NDEzIDExLjUzMTIgOC43MTg2N0MxMS4zNTY2IDguODkzMjIgMTEuMjU1OSA5LjEyODIzIDExLjI1IDkuMzc1VjM1LjYyNUMxMS4yNTU5IDM1Ljg3MTggMTEuMzU2NiAzNi4xMDY4IDExLjUzMTIgMzYuMjgxM0MxMS43MDU3IDM2LjQ1NTkgMTEuOTQwNyAzNi41NTY2IDEyLjE4NzUgMzYuNTYyNUgzMi44MTI1QzMzLjA1OTMgMzYuNTU2NiAzMy4yOTQzIDM2LjQ1NTkgMzMuNDY4OCAzNi4yODEzQzMzLjY0MzQgMzYuMTA2OCAzMy43NDQxIDM1Ljg3MTggMzMuNzUgMzUuNjI1VjkuMzc1Wk0yNC4zNzUgMTMuMTI1SDMwVjE2Ljg3NUgyNC4zNzVWMTMuMTI1Wk0zMCAyMy40Mzc1SDI0LjM3NVYxOS42ODc1SDMwVjIzLjQzNzVaTTE1IDEzLjEyNUgyMC42MjVWMTYuODc1SDE1VjEzLjEyNVpNMTUgMjMuNDM3NVYxOS42ODc1SDIwLjYyNVYyMy40Mzc1SDE1Wk0xOC43NSAzNC42ODc1VjI4LjEyNUMxOC43NTU5IDI3Ljg3ODIgMTguODU2NiAyNy42NDMyIDE5LjAzMTIgMjcuNDY4N0MxOS4yMDU3IDI3LjI5NDEgMTkuNDQwNyAyNy4xOTM0IDE5LjY4NzUgMjcuMTg3NUgyNS4zMTI1QzI1LjU1OTMgMjcuMTkzNCAyNS43OTQzIDI3LjI5NDEgMjUuOTY4OCAyNy40Njg3QzI2LjE0MzQgMjcuNjQzMiAyNi4yNDQxIDI3Ljg3ODIgMjYuMjUgMjguMTI1VjM0LjY4NzVIMTguNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

}),
43593: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/monitoring-map-area-tree-example-83c033a246fd3a83889a4111c4e2ced2.png");

}),
69796: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/monitoring-map-area-tree-ad4ae185a1ecc1918cfb680e0d0a82ca.png");

}),
21006: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiMzRTY2RkYiLz4KPHBhdGggZD0iTTMwLjAyNjYgMTYuMDI2NkMzMC4wODQ3IDE1LjYxOTEgMzAuMDQ3MiAxNS4yMDM2IDI5LjkxNyAxNC44MTMxQzI5Ljc4NjggMTQuNDIyNiAyOS41Njc1IDE0LjA2NzggMjkuMjc2NCAxMy43NzY4QzI4Ljk4NTQgMTMuNDg1NyAyOC42MzA1IDEzLjI2NjQgMjguMjQgMTMuMTM2MkMyNy44NDk1IDEzLjAwNiAyNy40MzQxIDEyLjk2ODQgMjcuMDI2NiAxMy4wMjY2SDExLjAyNjZDMTAuNjE5MSAxMi45Njg0IDEwLjIwMzYgMTMuMDA2IDkuODEzMTQgMTMuMTM2MkM5LjQyMjY1IDEzLjI2NjQgOS4wNjc4MiAxMy40ODU3IDguNzc2NzUgMTMuNzc2OEM4LjQ4NTY5IDE0LjA2NzggOC4yNjYzNyAxNC40MjI2IDguMTM2MTcgMTQuODEzMUM4LjAwNTk2IDE1LjIwMzYgNy45Njg0NSAxNS42MTkxIDguMDI2NTkgMTYuMDI2NlYzMC4wMjY2QzcuOTY4NDUgMzAuNDM0MSA4LjAwNTk2IDMwLjg0OTUgOC4xMzYxNyAzMS4yNEM4LjI2NjM3IDMxLjYzMDUgOC40ODU2OSAzMS45ODU0IDguNzc2NzUgMzIuMjc2NEM5LjA2NzgyIDMyLjU2NzUgOS40MjI2NSAzMi43ODY4IDkuODEzMTQgMzIuOTE3QzEwLjIwMzYgMzMuMDQ3MiAxMC42MTkxIDMzLjA4NDcgMTEuMDI2NiAzMy4wMjY2SDI3LjAyNjZDMjcuNDM0MSAzMy4wODQ3IDI3Ljg0OTUgMzMuMDQ3MiAyOC4yNCAzMi45MTdDMjguNjMwNSAzMi43ODY4IDI4Ljk4NTQgMzIuNTY3NSAyOS4yNzY0IDMyLjI3NjRDMjkuNTY3NSAzMS45ODU0IDI5Ljc4NjggMzEuNjMwNSAyOS45MTcgMzEuMjRDMzAuMDQ3MiAzMC44NDk1IDMwLjA4NDcgMzAuNDM0MSAzMC4wMjY2IDMwLjAyNjZWMTYuMDI2NlpNMzIuMDI2NiAxOS4zNzY2VjI2Ljc3NjZMMzYuNTc2NiAyOS40MjY2QzM2Ljg0MSAyOS42MDk5IDM3LjEyNjQgMjkuNzYwOSAzNy40MjY2IDI5Ljg3NjZDMzcuNjYzNyAyOS45NzczIDM3LjkxOSAzMC4wMjg0IDM4LjE3NjYgMzAuMDI2NkMzOC40MzA0IDI5Ljk5NzkgMzguNjgxMyAyOS45NDc3IDM4LjkyNjYgMjkuODc2NkMzOS4yODU1IDI5LjcyODggMzkuNTg2NyAyOS40Njg2IDM5Ljc4NTEgMjkuMTM1QzM5Ljk4MzQgMjguODAxNCA0MC4wNjgyIDI4LjQxMjUgNDAuMDI2NiAyOC4wMjY2VjE4LjAyNjZDNDAuMDY4MiAxNy42NDA3IDM5Ljk4MzQgMTcuMjUxOCAzOS43ODUxIDE2LjkxODJDMzkuNTg2NyAxNi41ODQ2IDM5LjI4NTUgMTYuMzI0NCAzOC45MjY2IDE2LjE3NjZDMzguNjgxMyAxNi4xMDU0IDM4LjQzMDQgMTYuMDU1MyAzOC4xNzY2IDE2LjAyNjZDMzcuOTE5IDE2LjAyNDggMzcuNjYzNyAxNi4wNzU4IDM3LjQyNjYgMTYuMTc2NkMzNy4xMjY0IDE2LjI5MjMgMzYuODQxIDE2LjQ0MzMgMzYuNTc2NiAxNi42MjY2TDMzLjAyNjYgMTguNzI2NlYxOC43NzY2TDMyLjAyNjYgMTkuMzc2NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

}),
16920: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiMzRTY2RkYiLz4KPHBhdGggZD0iTTMwLjAyNjYgMTYuMDI2NkMzMC4wODQ3IDE1LjYxOTEgMzAuMDQ3MiAxNS4yMDM2IDI5LjkxNyAxNC44MTMxQzI5Ljc4NjggMTQuNDIyNiAyOS41Njc1IDE0LjA2NzggMjkuMjc2NCAxMy43NzY4QzI4Ljk4NTQgMTMuNDg1NyAyOC42MzA1IDEzLjI2NjQgMjguMjQgMTMuMTM2MkMyNy44NDk1IDEzLjAwNiAyNy40MzQxIDEyLjk2ODQgMjcuMDI2NiAxMy4wMjY2SDExLjAyNjZDMTAuNjE5MSAxMi45Njg0IDEwLjIwMzYgMTMuMDA2IDkuODEzMTQgMTMuMTM2MkM5LjQyMjY1IDEzLjI2NjQgOS4wNjc4MiAxMy40ODU3IDguNzc2NzUgMTMuNzc2OEM4LjQ4NTY5IDE0LjA2NzggOC4yNjYzNyAxNC40MjI2IDguMTM2MTcgMTQuODEzMUM4LjAwNTk2IDE1LjIwMzYgNy45Njg0NSAxNS42MTkxIDguMDI2NTkgMTYuMDI2NlYzMC4wMjY2QzcuOTY4NDUgMzAuNDM0MSA4LjAwNTk2IDMwLjg0OTUgOC4xMzYxNyAzMS4yNEM4LjI2NjM3IDMxLjYzMDUgOC40ODU2OSAzMS45ODU0IDguNzc2NzUgMzIuMjc2NEM5LjA2NzgyIDMyLjU2NzUgOS40MjI2NSAzMi43ODY4IDkuODEzMTQgMzIuOTE3QzEwLjIwMzYgMzMuMDQ3MiAxMC42MTkxIDMzLjA4NDcgMTEuMDI2NiAzMy4wMjY2SDI3LjAyNjZDMjcuNDM0MSAzMy4wODQ3IDI3Ljg0OTUgMzMuMDQ3MiAyOC4yNCAzMi45MTdDMjguNjMwNSAzMi43ODY4IDI4Ljk4NTQgMzIuNTY3NSAyOS4yNzY0IDMyLjI3NjRDMjkuNTY3NSAzMS45ODU0IDI5Ljc4NjggMzEuNjMwNSAyOS45MTcgMzEuMjRDMzAuMDQ3MiAzMC44NDk1IDMwLjA4NDcgMzAuNDM0MSAzMC4wMjY2IDMwLjAyNjZWMTYuMDI2NlpNMzIuMDI2NiAxOS4zNzY2VjI2Ljc3NjZMMzYuNTc2NiAyOS40MjY2QzM2Ljg0MSAyOS42MDk5IDM3LjEyNjQgMjkuNzYwOSAzNy40MjY2IDI5Ljg3NjZDMzcuNjYzNyAyOS45NzczIDM3LjkxOSAzMC4wMjg0IDM4LjE3NjYgMzAuMDI2NkMzOC40MzA0IDI5Ljk5NzkgMzguNjgxMyAyOS45NDc3IDM4LjkyNjYgMjkuODc2NkMzOS4yODU1IDI5LjcyODggMzkuNTg2NyAyOS40Njg2IDM5Ljc4NTEgMjkuMTM1QzM5Ljk4MzQgMjguODAxNCA0MC4wNjgyIDI4LjQxMjUgNDAuMDI2NiAyOC4wMjY2VjE4LjAyNjZDNDAuMDY4MiAxNy42NDA3IDM5Ljk4MzQgMTcuMjUxOCAzOS43ODUxIDE2LjkxODJDMzkuNTg2NyAxNi41ODQ2IDM5LjI4NTUgMTYuMzI0NCAzOC45MjY2IDE2LjE3NjZDMzguNjgxMyAxNi4xMDU0IDM4LjQzMDQgMTYuMDU1MyAzOC4xNzY2IDE2LjAyNjZDMzcuOTE5IDE2LjAyNDggMzcuNjYzNyAxNi4wNzU4IDM3LjQyNjYgMTYuMTc2NkMzNy4xMjY0IDE2LjI5MjMgMzYuODQxIDE2LjQ0MzMgMzYuNTc2NiAxNi42MjY2TDMzLjAyNjYgMTguNzI2NlYxOC43NzY2TDMyLjAyNjYgMTkuMzc2NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS44NTU1IDI3LjI2ODVMMTkuMDI2OSAyNC40NDA2TDE2LjE5ODcgMjcuMjY4NUMxNi4xMDU5IDI3LjM2MTUgMTUuOTk1NCAyNy40MzUzIDE1Ljg3NCAyNy40ODU2QzE1Ljc1MjYgMjcuNTM1OSAxNS42MjI2IDI3LjU2MTggMTUuNDkxMiAyNy41NjE4QzE1LjM1OTggMjcuNTYxOCAxNS4yMjk4IDI3LjUzNTkgMTUuMTA4NCAyNy40ODU2QzE0Ljk4NyAyNy40MzUzIDE0Ljg3NjYgMjcuMzYxNSAxNC43ODM3IDI3LjI2ODVDMTQuNTk2MiAyNy4wODEgMTQuNDkwNyAyNi44MjY3IDE0LjQ5MDcgMjYuNTYxNUMxNC40OTA3IDI2LjI5NjQgMTQuNTk2MiAyNi4wNDIxIDE0Ljc4MzcgMjUuODU0NkwxNy42MTI4IDIzLjAyNTVMMTQuNzgzNyAyMC4xOTc1QzE0LjY5MDcgMjAuMTA0NyAxNC42MTY3IDE5Ljk5NDQgMTQuNTY2NCAxOS44NzNDMTQuNTE2MSAxOS43NTE2IDE0LjQ5MDIgMTkuNjIxNSAxNC40OTAyIDE5LjQ5MDFDMTQuNDkwMiAxOS4zNTg2IDE0LjUxNjEgMTkuMjI4NSAxNC41NjY0IDE5LjEwNzFDMTQuNjE2NyAxOC45ODU3IDE0LjY5MDcgMTguODc1NCAxNC43ODM3IDE4Ljc4MjVDMTQuODc2NiAxOC42ODk2IDE0Ljk4NyAxOC42MTU4IDE1LjEwODQgMTguNTY1NUMxNS4yMjk4IDE4LjUxNTIgMTUuMzU5OCAxOC40ODkzIDE1LjQ5MTIgMTguNDg5M0MxNS42MjI2IDE4LjQ4OTMgMTUuNzUyNiAxOC41MTUyIDE1Ljg3NCAxOC41NjU1QzE1Ljk5NTQgMTguNjE1OCAxNi4xMDU5IDE4LjY4OTYgMTYuMTk4NyAxOC43ODI1TDE5LjAyNjkgMjEuNjExNUwyMS44NTU1IDE4Ljc4MjVDMjIuMDQzIDE4LjU5NTEgMjIuMjk3MyAxOC40ODk3IDIyLjU2MjUgMTguNDg5N0MyMi44Mjc3IDE4LjQ4OTcgMjMuMDgyIDE4LjU5NTEgMjMuMjY5NSAxOC43ODI1QzIzLjM2MjUgMTguODc1NCAyMy40MzY1IDE4Ljk4NTcgMjMuNDg2OCAxOS4xMDcxQzIzLjUzNzEgMTkuMjI4NSAyMy41NjMgMTkuMzU4NiAyMy41NjMgMTkuNDkwMUMyMy41NjMgMTkuNjIxNSAyMy41MzcxIDE5Ljc1MTYgMjMuNDg2OCAxOS44NzNDMjMuNDM2NSAxOS45OTQ0IDIzLjM2MjUgMjAuMTA0NyAyMy4yNjk1IDIwLjE5NzVMMjAuNDQxNCAyMy4wMjU1TDIzLjI2OTUgMjUuODU0NkMyMy40NTcgMjYuMDQyMSAyMy41NjI1IDI2LjI5NjQgMjMuNTYyNSAyNi41NjE1QzIzLjU2MjUgMjYuODI2NyAyMy40NTcgMjcuMDgxIDIzLjI2OTUgMjcuMjY4NUMyMy4wODIgMjcuNDU2MSAyMi44Mjc3IDI3LjU2MTUgMjIuNTYyNSAyNy41NjE1QzIyLjI5NzMgMjcuNTYxNSAyMi4wNDMgMjcuNDU2MSAyMS44NTU1IDI3LjI2ODVaIiBmaWxsPSIjRkYwMDAwIi8+Cjwvc3ZnPgo=");

}),
18248: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiNGRjVFMDAiLz4KPHBhdGggZD0iTTI4LjYzODcgMTIuMTk0NkMyOC41NzY2IDEyLjEyNjQgMjguNTAxNCAxMi4wNzE2IDI4LjQxNzUgMTIuMDMzNEMyOC4zMzM2IDExLjk5NTMgMjguMjQyOCAxMS45NzQ2IDI4LjE1MDYgMTEuOTcyN0gxNS44NjA0QzE1LjYxMzQgMTEuOTc2OCAxNS4zNzY1IDEyLjA3MTUgMTUuMTk0OCAxMi4yMzg5QzE1LjA1NDIgMTIuMzk4NCAxNC45NzU1IDEyLjYwMzEgMTQuOTczIDEyLjgxNTdWMzYuMjQyNkMxNC45Njg3IDM2LjM0ODggMTQuOTg2MiAzNi40NTQ3IDE1LjAyNDQgMzYuNTUzOUMxNS4wNjI1IDM2LjY1MzEgMTUuMTIwNSAzNi43NDM0IDE1LjE5NDggMzYuODE5NEMxNS4yNzkgMzYuOTEzNSAxNS4zODE0IDM2Ljk4OTYgMTUuNDk1OCAzNy4wNDNDMTUuNjEwMiAzNy4wOTYzIDE1LjczNDIgMzcuMTI1OSAxNS44NjA0IDM3LjEzSDI4LjE1MDZDMjguMjQyOCAzNy4xMjgxIDI4LjMzMzYgMzcuMTA3NCAyOC40MTc1IDM3LjA2OTNDMjguNTAxNCAzNy4wMzExIDI4LjU3NjYgMzYuOTc2MyAyOC42Mzg3IDM2LjkwODFMMjguNzI3NCAzNi44MTk0QzI4LjgxMzIgMzYuNzUwMyAyOC44ODE5IDM2LjY2MjIgMjguOTI4MSAzNi41NjIyQzI4Ljk3NDIgMzYuNDYyMSAyOC45OTY3IDM2LjM1MjcgMjguOTkzNiAzNi4yNDI2VjEyLjgxNTdDMjguOTkwNyAxMi43MDY2IDI4Ljk2NTUgMTIuNTk5MiAyOC45MTk4IDEyLjVDMjguODc0IDEyLjQwMDggMjguODA4NiAxMi4zMTIgMjguNzI3NCAxMi4yMzg5QzI4LjcxNjMgMTIuMjI2IDI4LjcwMjggMTIuMjE1NCAyOC42ODc1IDEyLjIwNzhDMjguNjcyMyAxMi4yMDAyIDI4LjY1NTcgMTIuMTk1NyAyOC42Mzg3IDEyLjE5NDZaTTE2Ljc5MjEgMjQuNTI5MkMxNi43ODkxIDI0LjQwNiAxNi44MTExIDI0LjI4MzUgMTYuODU2OSAyNC4xNjlDMTYuOTAyNiAyNC4wNTQ2IDE2Ljk3MTEgMjMuOTUwNyAxNy4wNTgzIDIzLjg2MzVDMTcuMTQ1NCAyMy43NzY0IDE3LjI0OTMgMjMuNzA3OSAxNy4zNjM3IDIzLjY2MjFDMTcuNDc4MiAyMy42MTY0IDE3LjYwMDcgMjMuNTk0NCAxNy43MjM5IDIzLjU5NzRDMTcuODQ3MSAyMy41OTQgMTcuOTY5NyAyMy42MTU5IDE4LjA4NDIgMjMuNjYxN0MxOC4xOTg2IDIzLjcwNzUgMTguMzAyNSAyMy43NzYyIDE4LjM4OTQgMjMuODYzNkMxOC41NTY4IDI0LjA0NTMgMTguNjUxNiAyNC4yODIyIDE4LjY1NTYgMjQuNTI5MkMxOC42NTg3IDI0LjY1MjQgMTguNjM2NyAyNC43NzQ5IDE4LjU5MDkgMjQuODg5M0MxOC41NDUyIDI1LjAwMzcgMTguNDc2NiAyNS4xMDc3IDE4LjM4OTUgMjUuMTk0OEMxOC4zMDI0IDI1LjI4MTkgMTguMTk4NCAyNS4zNTA0IDE4LjA4NCAyNS4zOTYyQzE3Ljk2OTYgMjUuNDQxOSAxNy44NDcxIDI1LjQ2NCAxNy43MjM5IDI1LjQ2MDlDMTcuNDc2OSAyNS40NTY5IDE3LjI0IDI1LjM2MjEgMTcuMDU4MyAyNS4xOTQ3QzE2Ljk3MDkgMjUuMTA3OCAxNi45MDIyIDI1LjAwMzkgMTYuODU2NCAyNC44ODk1QzE2LjgxMDYgMjQuNzc1IDE2Ljc4ODcgMjQuNjUyNCAxNi43OTIxIDI0LjUyOTJaTTMxLjk2NjMgMTEuMzUxNkMzMS45Njg4IDExLjA1MDEgMzEuOTA2OCAxMC43NTE2IDMxLjc4NDMgMTAuNDc2MUMzMS42NjE5IDEwLjIwMDYgMzEuNDgxOSA5Ljk1NDQ1IDMxLjI1NjQgOS43NTQyN0MzMS4wNDc0IDkuNTI0ODkgMzAuNzk0MyA5LjMzOTkxIDMwLjUxMjMgOS4yMTAzM0MzMC4yMzAyIDkuMDgwNzUgMjkuOTI1IDkuMDA5MjIgMjkuNjE0OCA5SDE0LjM1MThDMTMuNzEzNSA5LjAyNDA2IDEzLjEwOTIgOS4yOTQzOSAxMi42NjU4IDkuNzU0MjdDMTIuNDUxNyA5Ljk2MDk0IDEyLjI4MjEgMTAuMjA5MyAxMi4xNjc3IDEwLjQ4NEMxMi4wNTMyIDEwLjc1ODcgMTEuOTk2MiAxMS4wNTQgMTIuMDAwMyAxMS4zNTE2VjM2LjI0MjZDMTEuOTk3MiAzNi4zNTI3IDEyLjAxOTcgMzYuNDYyMSAxMi4wNjU4IDM2LjU2MjJDMTIuMTEyIDM2LjY2MjIgMTIuMTgwNyAzNi43NTAzIDEyLjI2NjUgMzYuODE5NEMxMi4zNCAzNi45MTQ2IDEyLjQzNCAzNi45OTIgMTIuNTQxNSAzNy4wNDU3QzEyLjY0OTEgMzcuMDk5NSAxMi43Njc0IDM3LjEyODMgMTIuODg3NyAzNy4xM0gxMi45NzY0QzEzLjA5MDkgMzcuMTMxIDEzLjIwMzggMzcuMTAzMSAxMy4zMDQ3IDM3LjA0ODhDMTMuNDA1NSAzNi45OTQ1IDEzLjQ5MSAzNi45MTU2IDEzLjU1MzIgMzYuODE5NEMxMy42NDk0IDM2Ljc1NzIgMTMuNzI4MyAzNi42NzE3IDEzLjc4MjYgMzYuNTcwOUMxMy44MzY5IDM2LjQ3IDEzLjg2NDggMzYuMzU3MSAxMy44NjM4IDM2LjI0MjZWMTIuMjgzM0MxMy44NjAzIDEyLjEwMiAxMy44OTQgMTEuOTIxOSAxMy45NjI2IDExLjc1NEMxNC4wMzEzIDExLjU4NjIgMTQuMTMzNiAxMS40MzQxIDE0LjI2MzEgMTEuMzA3MkMxNC4zOTM5IDExLjE2NzUgMTQuNTUyIDExLjA1NjEgMTQuNzI3NSAxMC45Nzk4QzE0LjkwMyAxMC45MDM1IDE1LjA5MjIgMTAuODYzOSAxNS4yODM2IDEwLjg2MzVIMjguNjgzQzI4Ljg2ODMgMTAuODYxNCAyOS4wNTE4IDEwLjkgMjkuMjIwNSAxMC45NzY3QzI5LjM4OTIgMTEuMDUzNCAyOS41Mzg5IDExLjE2NjIgMjkuNjU5MiAxMS4zMDcyQzI5LjgwMDIgMTEuNDI3NCAyOS45MTMgMTEuNTc3MiAyOS45ODk3IDExLjc0NTlDMzAuMDY2MyAxMS45MTQ1IDMwLjEwNSAxMi4wOTggMzAuMTAyOCAxMi4yODMzVjM2LjI0MjZDMzAuMDk5OCAzNi4zNTI3IDMwLjEyMjIgMzYuNDYyMSAzMC4xNjg0IDM2LjU2MjJDMzAuMjE0NiAzNi42NjIyIDMwLjI4MzMgMzYuNzUwMyAzMC4zNjkxIDM2LjgxOTRDMzAuNDQyNSAzNi45MTQ2IDMwLjUzNjYgMzYuOTkyIDMwLjY0NDEgMzcuMDQ1N0MzMC43NTE3IDM3LjA5OTUgMzAuODcgMzcuMTI4MyAzMC45OTAyIDM3LjEzSDMxLjA3OUMzMS4xOTkyIDM3LjEyODMgMzEuMzE3NSAzNy4wOTk1IDMxLjQyNTEgMzcuMDQ1N0MzMS41MzI2IDM2Ljk5MiAzMS42MjY3IDM2LjkxNDYgMzEuNzAwMSAzNi44MTk0QzMxLjc4NTkgMzYuNzUwMyAzMS44NTQ2IDM2LjY2MjIgMzEuOTAwOCAzNi41NjIyQzMxLjk0NyAzNi40NjIxIDMxLjk2OTQgMzYuMzUyNyAzMS45NjYzIDM2LjI0MjZWMTEuMzUxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

}),
30129: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSI1MSIgcng9IjExIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMCAyNCkiIGZpbGw9IiMzRjNFM0IiLz4KPHBhdGggZD0iTTE3LjE1NTMgMTIuNjkxOEw5LjE4NjUyIDEyLjY5MThMOS4xODY1MiAxMS4zMzk1TDE3LjE1NTMgMTEuMzM5NUwxNy4xNTUzIDEyLjY5MThaTTEzLjg0NyAxNkwxMi40OTQ4IDE2TDEyLjQ5NDggOC4wMzEyNUwxMy44NDcgOC4wMzEyNUwxMy44NDcgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDEgMTEuNVYxMi41TDMzIDEyLjVWMTEuNUw0MSAxMS41WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

}),
44678: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAyNCA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjUxIiByeD0iMTEiIGZpbGw9IiMzRjNFM0IiLz4KPHBhdGggZD0iTTExLjMwODIgMTcuMTU1M1Y5LjE4NjUySDEyLjY2MDVWMTcuMTU1M0gxMS4zMDgyWk04IDEzLjg0N1YxMi40OTQ4SDE1Ljk2ODhWMTMuODQ3SDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMzlWNDBIOFYzOUgxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

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