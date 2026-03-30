"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["70767"], {
17567: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_vionyx_installation_mdx_c8b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-vionyx-installation-mdx-c8b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_vionyx_installation_mdx_c8b_namespaceObject = JSON.parse('{"id":"device/vionyx/installation","title":"Instalación y conexión","description":"Ofrece los procedimientos completos de instalación y ejemplos de conexión necesarios para el dispositivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/vionyx/installation.mdx","sourceDirName":"device/vionyx","slug":"/device/vionyx/installation","permalink":"/docs/es/device/vionyx/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"Instalación y conexión","description":"Ofrece los procedimientos completos de instalación y ejemplos de conexión necesarios para el dispositivo.","keywords":["Placa de montaje","Alimentación","Red","Entrada","Relé"],"isTranslationMissing":false},"sidebar":"vionyx","previous":{"title":"Primeros Pasos","permalink":"/docs/es/device/vionyx/getting-started"},"next":{"title":"Acceso y configuración del servidor web","permalink":"/docs/es/device/vionyx/web-server-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/vionyx/installation.mdx


const frontMatter = {
	id: 'installation',
	title: 'Instalación y conexión',
	description: 'Ofrece los procedimientos completos de instalación y ejemplos de conexión necesarios para el dispositivo.',
	keywords: [
		'Placa de montaje',
		'Alimentación',
		'Red',
		'Entrada',
		'Relé'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*### 전체 연결 구성도

<Magnify src='/img/device/system-cs20.svg' width='80%' zoomFactor={.4} mgWidth={500} mgHeight={500} />

:::info

El puerto USB del producto es un puerto de expansión para facilitar la instalación y no está diseñado para grabación ni para vigilancia.

:::*/


const toc = [{
  "value": "Instalación de la cámara",
  "id": "instalación-de-la-cámara",
  "level": 2
}, {
  "value": "Precauciones de instalación",
  "id": "precauciones-de-instalación",
  "level": 3
}, {
  "value": "Instalación",
  "id": "instalación",
  "level": 3
}, {
  "value": "Conexión y configuración de cables",
  "id": "conexión-y-configuración-de-cables",
  "level": 2
}, {
  "value": "Conexión de la fuente de alimentación",
  "id": "conexión-de-la-fuente-de-alimentación",
  "level": 3
}, {
  "value": "Conexión de red",
  "id": "conexión-de-red",
  "level": 3
}, {
  "value": "TCP/IP: Conexión LAN (conexión a un concentrador)",
  "id": "tcpip-conexión-lan-conexión-a-un-concentrador",
  "level": 4
}, {
  "value": "Puertos y servicios de red",
  "id": "puertos-y-servicios-de-red",
  "level": 4
}, {
  "value": "Conexión RS-485",
  "id": "conexión-rs-485",
  "level": 3
}, {
  "value": "Conexiones de entrada de alarma y E/S de relé",
  "id": "conexiones-de-entrada-de-alarma-y-es-de-relé",
  "level": 3
}, {
  "value": "Conexiones de audio",
  "id": "conexiones-de-audio",
  "level": 3
}, {
  "value": "Conexiones de tarjeta Micro SD y de dispositivos USB",
  "id": "conexiones-de-tarjeta-micro-sd-y-de-dispositivos-usb",
  "level": 2
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Row, Table, Tbody, Td, Th, Thead} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  if (!Thead) _missingMdxReference("Thead", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Ofrece los procedimientos completos de instalación y ejemplos de conexión necesarios para el dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instalación-de-la-cámara",
      children: "Instalación de la cámara"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga los pasos a continuación para instalar la cámara de manera segura."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "precauciones-de-instalación",
      children: "Precauciones de instalación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asegúrese de leer las siguientes precauciones antes de instalar la cámara."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Instale la cámara en un lugar que pueda soportar una carga de al menos 5 veces el peso de la cámara."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Evite pellizcar los cables o dañar el aislamiento del cable, ya que esto puede provocar daños en el producto o un incendio."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Mantenga a otras personas alejadas del área de instalación mientras instala la cámara. Antes de empezar, retire objetos de valor u otros artículos situados bajo el área de instalación que puedan dañarse."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El uso de fuerza excesiva durante el ensamblaje puede provocar fallos o daños en el producto. Utilice únicamente las herramientas especificadas."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Precauciones de impermeabilidad y protección contra el polvo"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Este producto cumple con las clasificaciones IP66 e IP67 de protección contra agua y polvo, pero no lo instale en lugares expuestos a chorros de agua directos o a inmersión continua."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Al abrir la tapa durante la instalación, tenga cuidado y evite que la humedad o el polvo entren en el interior."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Al conectar los cables, asegúrese de fijar correctamente los componentes impermeables proporcionados."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "instalación",
      children: "Instalación"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Se recomienda montar la cámara en el techo para lograr un campo de visión amplio."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No instale la cámara en lugares donde quede expuesta directamente a la luz solar o a los rayos UV."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Ajuste la ubicación de instalación para evitar la luz solar directa sobre la lente o contraluces intensos, ya que pueden degradar el rendimiento del reconocimiento facial y de objetos basados en IA."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Utilice el destornillador Torx T10 provisto para girar los tornillos en sentido antihorario y retirar la tapa de la cámara."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation1-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Afloje los tornillos de fijación de la placa de montaje girándolos en sentido antihorario, luego separe la placa de montaje del cuerpo de la cámara."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation2-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Inserte una tarjeta microSD en la ranura microSD del cuerpo de la cámara. Para conectar accesorios USB (tipo A), enchúfelos en el puerto USB."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation-usb-sdcard-connection-vionyx.png",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Coloque la placa de montaje en la ubicación de instalación, teniendo en cuenta la orientación de la cámara. Marque la posición de los tornillos y el agujero para los cables, y luego taladre."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation3-vionyx.png",
          className: "none",
          width: "50%",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Al instalarla en una pared en lugar del techo, oriente la placa de montaje de modo que el triángulo rojo apunte a las 12 en punto (norte)."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga pasar los cables que se conectarán (alimentación, red, audio/alarma, etc.) por el orificio correspondiente de la placa de montaje."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation5-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Utilice los tornillos de montaje para fijar firmemente la placa de montaje."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation4-vionyx.svg",
          className: "none",
          width: "40%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retire la goma impermeable del cable Ethernet y el tapón impermeable del orificio del cuerpo de la cámara; luego conecte los cables necesarios."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation6-vionyx.svg",
          className: "none",
          width: "70%",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conecte el cable Ethernet"
            })
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation11-1-vionyx.svg",
            className: "none",
            width: "30%",
            alone: true
          }), (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Deslice la goma impermeable que retiró sobre el cable Ethernet."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Inserte la goma impermeable del cable Ethernet en el orificio Ethernet del cuerpo de la cámara."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Asegure la unión y la tuerca en la goma impermeable del cable Ethernet."
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conecte otros cables"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "Haga pasar el cable por el orificio del cuerpo de la cámara del que retiró el tapón impermeable y, a continuación, instale la goma impermeable."
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation11-2-vionyx.svg",
            className: "none",
            width: "80%",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Afloje completamente el tornillo de fijación de la placa de montaje, alinee el cuerpo de la cámara con el centro de la marca impresa (triángulo rojo) y luego gire el tornillo de fijación del soporte en sentido horario para fijarlo."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation8-vionyx.svg",
          className: "none",
          width: "40%",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "Si necesita ajustar el ángulo de la cámara, gire el cuerpo de la cámara hacia la izquierda o hacia la derecha para ajustar el ángulo de instalación hasta 15° en total (hasta 8° por cada lado)."
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation9-vionyx.png",
            className: "none",
            width: "50%",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Utilice un destornillador Torx T10 para volver a apretar firmemente el tornillo de fijación del soporte."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation10-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Coloque la cubierta en el cuerpo de la cámara y utilice un destornillador Torx T10 para apretar firmemente los 3 tornillos."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation12-vionyx.svg",
      className: "none",
      width: "60%",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Coloque el logotipo AI en la cubierta en la posición de las 6 en punto (sur) con respecto al triángulo rojo de la placa de montaje."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/camera/installation14-vionyx.svg",
        className: "none",
        width: "20%",
        alone: true
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Apriete completamente los tornillos al fijar la cubierta; de lo contrario, la estanqueidad puede verse comprometida. (IP66/IP67)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conexión-y-configuración-de-cables",
      children: "Conexión y configuración de cables"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conexión-de-la-fuente-de-alimentación",
      children: "Conexión de la fuente de alimentación"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-power-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No conecte la fuente de alimentación (o el adaptador) y la fuente de alimentación PoE+ al mismo tiempo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Utilice un adaptador de alimentación aprobado según IEC/EN 62368-1 con una potencia de salida igual o superior al consumo máximo de la cámara. Si piensa conectar otro dispositivo al adaptador, utilice un adaptador con una capacidad igual o superior al consumo combinado de la cámara y del otro dispositivo."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Consulte la sección ", (0,jsx_runtime.jsx)(_components.a, {
                href: "product-specifications#specs.power",
                children: "Alimentación"
              }), " en las especificaciones del producto para conocer el consumo máximo de corriente."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Al conectar la alimentación, tenga en cuenta la distancia entre el dispositivo y la fuente de alimentación. Conecte el dispositivo lo más cerca posible de la fuente para que la longitud del cable sea mínima. Si las conexiones se hacen de forma incorrecta, el dispositivo puede funcionar mal. Se recomienda usar un cable de 16 AWG o 18 AWG si el producto está lejos de la fuente de alimentación. La distancia de conexión puede variar según el estándar del cable utilizado y el entorno de instalación. Este producto admite alimentación de 12 V CC; verifique la longitud máxima de extensión para cada tipo de cable y conecte la alimentación correctamente."
          }), "\n", (0,jsx_runtime.jsxs)(Table, {
            children: [(0,jsx_runtime.jsx)(Thead, {
              children: (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Th, {
                  children: "Estándar de cable"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "Máx. longitud extendida"
                })]
              })
            }), (0,jsx_runtime.jsxs)(Tbody, {
              children: [(0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "16 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "50 m"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "18 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "30 m"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "20 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "20 m"
                })]
              })]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "NO extienda la longitud del cable de alimentación al usar el adaptador de alimentación."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conexión-de-red",
      children: "Conexión de red"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tcpip-conexión-lan-conexión-a-un-concentrador",
      children: "TCP/IP: Conexión LAN (conexión a un concentrador)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Conéctese al concentrador con un cable CAT-5e estándar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Admite PoE+, que suministra tanto energía como datos a través de un único cable Ethernet."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-network-hub-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "puertos-y-servicios-de-red",
      children: "Puertos y servicios de red"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Este dispositivo usa los siguientes puertos para la comunicación en red y el funcionamiento estable del servicio."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Protocolo"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción del servicio"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Se utiliza para los servicios de comunicación entre el servidor y el dispositivo, así como para el servicio de cambio de estado operativo del dispositivo."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "UDP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Se usa para el servicio de detección del dispositivo, que permite buscar dispositivos en la red."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Estos puertos son necesarios para el funcionamiento normal de la red del producto. Al configurar el firewall o los ajustes de seguridad de la red, permita el tráfico a través de estos puertos."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conexión-rs-485",
      children: "Conexión RS-485"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conecte a dispositivos externos mediante RS-485. Observe la polaridad (A/B) al cablear."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-rs485-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conexiones-de-entrada-de-alarma-y-es-de-relé",
      children: "Conexiones de entrada de alarma y E/S de relé"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice el relé incorporado del producto para conectar directamente dispositivos de alarma externos (luces estroboscópicas, sirenas, etc.), cerraduras de puertas, botones de salida y sensores de puertas sin un dispositivo E/S separado."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-io-inout-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Instale diodos en ambos lados del cableado, como se muestra, para proteger el relé de la corriente inversa que se genera cuando se activa la cerradura de la puerta o la luz estroboscópica."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los dispositivos externos conectados al producto (p. ej., las cerraduras de las puertas) deben usar una fuente de alimentación independiente."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los lectores inteligentes autónomos de Suprema contienen relés internos que pueden bloquear o desbloquear puertas directamente sin controladores externos para mayor comodidad. Sin embargo, para aplicaciones de control de acceso que requieran seguridad, NO se recomienda utilizar el relé interno del lector, ya que podría ser manipulado y provocar la apertura de la puerta. Para estas aplicaciones, se recomienda encarecidamente usar una unidad de relé separada para el control de la cerradura, como Secure I/O 2, DM-20 o CoreStation de Suprema, instalada en el lado seguro de la puerta."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Preste atención a la orientación del diodo. Instale el diodo lo más cerca posible del dispositivo externo conectado."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conexiones-de-audio",
      children: "Conexiones de audio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Entrada de audio (LINE IN): conecte una fuente de audio. El producto incluye un micrófono integrado en la parte frontal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Salida de audio (LINE OUT): conéctela a un amplificador. Este producto no incluye un amplificador de audio integrado; utilice un amplificador y altavoces por separado."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-audio-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conexiones-de-tarjeta-micro-sd-y-de-dispositivos-usb",
      children: "Conexiones de tarjeta Micro SD y de dispositivos USB"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-usb-sdcard-connection-vionyx.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tarjeta Micro SD: inserte una tarjeta Micro SD para el almacenamiento de video."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "USB: conecte accesorios USB (Tipo A)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Especificaciones recomendadas de tarjetas Micro SD/SDHC/SDXC"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Capacidad recomendada: 16GB a 1TB"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Recomendamos usar tarjetas de memoria de los siguientes fabricantes y líneas de producto."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Fabricantes: Samsung, SanDisk, Transcend"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Líneas de producto: High Endurance, Pro Endurance"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La compatibilidad puede variar según el fabricante y el tipo de tarjeta."
          }), "\n"]
        }), "\n"]
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