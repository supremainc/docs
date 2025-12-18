"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["34468"], {
89118: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_configuration_mdx_4bd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-corestation-setup-manager-configuration-mdx-4bd.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_configuration_mdx_4bd_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/configuration","title":"Configuración del dispositivo","description":"Guía para los ajustes y la administración del dispositivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/configuration.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/configuration","permalink":"/docs/es/device/corestation_setup_manager/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"configuration","title":"Configuración del dispositivo","description":"Guía para los ajustes y la administración del dispositivo.","keywords":["Configuración del dispositivo","Esclavo","Información","Red","Autenticación","Configuración avanzada"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"Configuración inicial del dispositivo","permalink":"/docs/es/device/corestation_setup_manager/initial-setup"},"next":{"title":"Monitorizar","permalink":"/docs/es/device/corestation_setup_manager/monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/configuration.mdx


const frontMatter = {
	id: 'configuration',
	title: 'Configuración del dispositivo',
	description: 'Guía para los ajustes y la administración del dispositivo.',
	keywords: [
		'Configuración del dispositivo',
		'Esclavo',
		'Información',
		'Red',
		'Autenticación',
		'Configuración avanzada'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Buscar y registrar dispositivo esclavo",
  "id": "buscar-y-registrar-dispositivo-esclavo",
  "level": 2
}, {
  "value": "Reiniciar dispositivo",
  "id": "reiniciar-dispositivo",
  "level": 2
}, {
  "value": "Modificar ajustes e información del dispositivo",
  "id": "modificar-ajustes-e-información-del-dispositivo",
  "level": 2
}, {
  "value": "Información",
  "id": "información",
  "level": 3
}, {
  "value": "Red",
  "id": "red",
  "level": 3
}, {
  "value": "Autenticación",
  "id": "autenticación",
  "level": 3
}, {
  "value": "Configuración avanzada",
  "id": "configuración-avanzada",
  "level": 3
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Guía para los ajustes y la administración del dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buscar-y-registrar-dispositivo-esclavo",
      children: "Buscar y registrar dispositivo esclavo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amplía fácilmente la red del sistema de control de acceso agregando dispositivos esclavos a CoreStation. CoreStation (maestro) y los dispositivos esclavos se pueden conectar mediante RS-485, y también se pueden conectar dispositivos adicionales como Secure I/O."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic con el botón derecho en CoreStation en la lista de dispositivos y haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Search Slave Device"
          }), ". Aparece una lista de los dispositivos esclavos conectados a CoreStation."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-search-slave-device1.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el dispositivo que deseas registrar como esclavo y haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add"
          }), ". Como alternativa, selecciona puertos individuales para agregar dispositivos esclavos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-search-slave-device2.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reiniciar-dispositivo",
      children: "Reiniciar dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reinicia el dispositivo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic con el botón derecho en CoreStation en la lista de dispositivos y haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reboot"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-reboot.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modificar-ajustes-e-información-del-dispositivo",
      children: "Modificar ajustes e información del dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura los detalles de CoreStation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Edite los campos necesarios."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), " para finalizar todos los ajustes y guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "información",
      children: "Información"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-information.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Nombre"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción de la función"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Nombre"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Consulta el nombre del dispositivo."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ID del dispositivo"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Consulta el ID del dispositivo."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Tipo de dispositivo"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Consulta el tipo de dispositivo."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Versión de firmware"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Instala una nueva versión del firmware haciendo clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Firmware Upgrade"
              }), " y seleccionando el archivo de firmware para la actualización."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Versión Kernel"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Consulta la versión del kernel."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Versión Hardware"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Consulta la versión del hardware."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Valores Fábrica"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Elimina toda la información almacenada en el dispositivo y restablece los ajustes."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Restaurar valores predeterminados"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Inicializa los ajustes del dispositivo.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ALL"
              }), ": Inicializa todos los ajustes.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "without Network"
              }), ": Inicializa todos los ajustes excepto los de red."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Bloqueado"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Cuando el dispositivo esté bloqueado debido a condiciones de operación, utiliza el botón ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Unlock"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Zona horaria"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Define la zona horaria del dispositivo."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Fecha Terminal"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Configura manualmente la fecha y la hora.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Get Time"
              }), ": Haz clic para obtener la hora configurada en el dispositivo.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Set Time"
              }), ": Haz clic para aplicar al dispositivo la hora configurada en CoreStation Setup Manager."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["El menú ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Factory Default"
        }), " se puede usar cuando hay un certificado raíz almacenado en el dispositivo. Al ejecutar un restablecimiento de fábrica se eliminará la cuenta de administrador."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "red",
      children: "Red"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-network.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Nombre"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción de la función"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Usar DHCP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Selecciona esta opción para que el dispositivo utilice una dirección IP dinámica. Si seleccionas este elemento, no se podrá asignar una dirección IP fija."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Dirección IP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Consulta la dirección IP del dispositivo."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Puerta de enlace"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Consulta la puerta de enlace del dispositivo."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Dirección Servidor DNS"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Consulta la dirección del servidor DNS del dispositivo."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Máscara de subred"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Consulta la máscara de subred del dispositivo."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Puerto del dispositivo"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Ingresa el puerto que utilizará el dispositivo."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Conexión Dispositivo a Servidor"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Al seleccionar esta opción podrás ingresar la información del servidor BioStar X para conectar el dispositivo al servidor."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Dirección Servidor"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Ingresa la dirección IP o el dominio del servidor BioStar X."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Puerto del servidor"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Ingresa el puerto del servidor BioStar X."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "RS485"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Solo está disponible el modo maestro."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Baud rate"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Define la velocidad de transmisión para cada puerto RS-485."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autenticación",
      children: "Autenticación"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-auth.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Nombre"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción de la función"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["Nivel Seguridad 1", ":N"]
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Define el nivel de seguridad utilizado para autenticar las huellas digitales. Al aumentar el nivel de seguridad, aumenta la tasa de rechazo falso (FRR) y disminuye la tasa de aceptación falsa (FAR)."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["Modo 1", ":N"]
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Define la velocidad de autenticación de huellas digitales. Al seleccionar ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Auto"
              }), ", la velocidad de autenticación se ajusta según la cantidad total de plantillas de huellas digitales inscritas en el dispositivo."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Formato Patrón"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Consulta el formato de plantilla de huella digital configurado."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La autenticación biométrica solo se admite en CoreStation."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuración-avanzada",
      children: "Configuración avanzada"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-advanced.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Nombre"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción de la función"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Falla de AC"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Configura un puerto AUX para supervisar las señales de entrada de alimentación."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Manipulación"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Configura un puerto AUX para las notificaciones de manipulación."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Incendio"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Configura un puerto AUX para supervisar señales de detección de incendios."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Configuración"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Configura el puerto Supervised Input de CoreStation como puerto de entrada y define el valor de la resistencia que se usará para Supervised Input. Los valores de resistencia pueden establecerse en 1 kΩ, 2.2 kΩ, 4.7 kΩ o 10 kΩ."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Sabotaje"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "En caso de manipulación del dispositivo, configúralo para que elimine toda la información de usuarios, los registros y las claves de seguridad almacenadas en el dispositivo."
            })]
          })]
        })]
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