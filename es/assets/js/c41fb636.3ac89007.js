"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["60185"], {
2488: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_device_manager_ip_device_settings_mdx_c41_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-device-manager-ip-device-settings-mdx-c41.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_device_manager_ip_device_settings_mdx_c41_namespaceObject = JSON.parse('{"id":"device/device_manager/ip-device-settings","title":"Configurar dispositivo IP","description":"Cambie la configuración del dispositivo IP.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/device_manager/ip-device-settings.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/ip-device-settings","permalink":"/docs/es/device/device_manager/ip-device-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/ip-device-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"ip-device-settings","title":"Configurar dispositivo IP","description":"Cambie la configuración del dispositivo IP.","keywords":["Dispositivo IP","Red","Servidor","RS-485","Otros","LED/Zumbador","Configuración del dispositivo","Conexión de dispositivos","Actualización de firmware","Reiniciar dispositivo","Inicializar configuración","Cambiar contraseña"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"Configuración inicial del dispositivo","permalink":"/docs/es/device/device_manager/initial-setup"},"next":{"title":"Configurar XPass D2","permalink":"/docs/es/device/device_manager/xpd2-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/device_manager/ip-device-settings.mdx


const frontMatter = {
	id: 'ip-device-settings',
	title: 'Configurar dispositivo IP',
	description: 'Cambie la configuración del dispositivo IP.',
	keywords: [
		'Dispositivo IP',
		'Red',
		'Servidor',
		'RS-485',
		'Otros',
		'LED/Zumbador',
		'Configuración del dispositivo',
		'Conexión de dispositivos',
		'Actualización de firmware',
		'Reiniciar dispositivo',
		'Inicializar configuración',
		'Cambiar contraseña'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Cambiar configuración del dispositivo",
  "id": "cambiar-configuración-del-dispositivo",
  "level": 2
}, {
  "value": "Configuración de red",
  "id": "configuración-de-red",
  "level": 3
}, {
  "value": "Servidor",
  "id": "servidor",
  "level": 3
}, {
  "value": "RS-485",
  "id": "rs-485",
  "level": 3
}, {
  "value": "Otros",
  "id": "otros",
  "level": 3
}, {
  "value": "LED / zumbador",
  "id": "led--zumbador",
  "level": 3
}, {
  "value": "Conectar dispositivo",
  "id": "connect-device",
  "level": 2
}, {
  "value": "Actualizar el firmware del dispositivo",
  "id": "device-firmware-upgrade",
  "level": 2
}, {
  "value": "Reiniciar dispositivo",
  "id": "reiniciar-dispositivo",
  "level": 2
}, {
  "value": "Inicializar configuración",
  "id": "inicializar-configuración",
  "level": 2
}, {
  "value": "Inicializar configuración del dispositivo excepto red",
  "id": "inicializar-configuración-del-dispositivo-excepto-red",
  "level": 2
}, {
  "value": "Cambiar contraseña del dispositivo",
  "id": "cambiar-contraseña-del-dispositivo",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcFilter, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcFilter) _missingMdxReference("IcFilter", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la configuración del dispositivo IP. Cambie la configuración de forma rápida y sencilla en comparación con hacerlo mediante el programa de administración en una PC o mediante tarjetas de comandos."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Es posible que ciertos ajustes no se apliquen si la versión del firmware del dispositivo es antigua. Consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "Actualizar el firmware del dispositivo"
        }), " para aplicar todos los ajustes."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cambiar-configuración-del-dispositivo",
      children: "Cambiar configuración del dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la configuración de red, servidor, RS-485, LED y zumbador, entre otras."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Los dispositivos biométricos solo admiten las configuraciones de red y servidor."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Active el Bluetooth en su dispositivo móvil y ejecute Suprema Device Manager."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione el dispositivo IP desde la pantalla principal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifique el ID del dispositivo para seleccionarlo en la lista de dispositivos conectables o acerque el dispositivo móvil al equipo para conectarse."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de establecer la contraseña del dispositivo, presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), ". Toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-password.svg",
            ico: true,
            alone: true
          }), " para mostrar la contraseña ingresada."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "La contraseña del dispositivo puede tener entre 6 y 32 caracteres."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Procure no perder la contraseña del dispositivo. Si pierde la contraseña del dispositivo, deberá inicializar el equipo para poder conectarse."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de configurar cada elemento, presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_288",
            product: "dev"
          }), " para guardar."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuración-de-red",
      children: "Configuración de red"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-network.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_355",
            product: "dev"
          }), ": Introduzca el puerto que utilizará el dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_012",
            product: "dev"
          }), ": Active esta opción para que el dispositivo use IP dinámica. Si activa esta opción, no podrá introducir la información de red manualmente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_029",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_068",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_191",
            product: "dev"
          }), ": Introduzca la información de red del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_013",
            product: "dev"
          }), ": Introduzca la dirección del servidor DNS."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "servidor",
      children: "Servidor"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-server.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_188",
            product: "dev"
          }), ": Configure el método de comunicación del servidor. Para buscar y conectar el dispositivo desde el servidor, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_181",
            product: "dev"
          }), ". Para establecer la información del servidor para conectar el dispositivo, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_281",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_182",
            product: "dev"
          }), ": Introduzca la dirección IP del servidor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_183",
            product: "dev"
          }), ": Introduzca el dominio del servidor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_189",
            product: "dev"
          }), ": Introduzca el puerto del servidor."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-485",
      children: "RS-485"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-rs485.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_050",
            product: "dev"
          }), ": Configure el modo RS-485."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_298",
            product: "dev"
          }), ": Establece la velocidad de transmisión RS-485."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "otros",
      children: "Otros"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-others.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_132",
            product: "dev"
          }), ": Verifique el estado de uso de la memoria."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_150",
            product: "dev"
          }), ": Si ocurre un evento de sabotaje en el dispositivo, puede configurarlo para eliminar toda la información de usuario, los registros y las claves de seguridad almacenadas. Active la función de manipulación de seguridad para utilizarla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "led--zumbador",
      children: "LED / zumbador"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/device-manager-led-buzzer.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_272",
            product: "dev"
          }), ": Configure los colores que se mostrarán en el LED del dispositivo durante el funcionamiento normal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_325",
            product: "dev"
          }), ": Configure el color que se mostrará en el LED del dispositivo y la cantidad de veces que suena el zumbador al escanear una tarjeta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_262",
            product: "dev"
          }), ": Configure el color que se mostrará en el LED del dispositivo y la cantidad de veces que suena el zumbador cuando la autenticación es correcta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_263",
            product: "dev"
          }), ": Configure el color que se mostrará en el LED del dispositivo y la cantidad de veces que suena el zumbador cuando la autenticación falla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El LED puede configurarse para mostrar un máximo de tres colores en patrones alternos. Presione la ranura para elegir un color."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al seleccionar ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-cancel2.svg",
              ico: true,
              alone: true
            }), ", se omite la secuencia de color de esa ranura y se muestra el color configurado para la siguiente ranura."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connect-device",
      children: "Conectar dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Busque y conéctese a los dispositivos IP instalados cercanos. Cuando esté conectado a Suprema Device Manager, podrá actualizar el firmware del dispositivo, reiniciarlo, inicializar la configuración, inicializar la configuración del dispositivo excepto la red, cambiar la contraseña de administrador y usar varias funciones."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Active el Bluetooth en su dispositivo móvil y ejecute Suprema Device Manager."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione el dispositivo IP desde la pantalla principal. Aparecerá una lista de dispositivos conectables."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-connect.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione un dispositivo verificando el ID en la lista de dispositivos o acerque su dispositivo móvil al dispositivo para conectarlo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese la contraseña de conexión. Toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-password.svg",
            ico: true,
            alone: true
          }), " para mostrar la contraseña ingresada."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " para completar la conexión del dispositivo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_291",
          product: "dev"
        }), ": En la parte superior de la pantalla de lista de dispositivos, presione ", (0,jsx_runtime.jsx)(IcFilter, {}), " para mostrar solo los dispositivos deseados en la lista."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-firmware-upgrade",
      children: "Actualizar el firmware del dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actualice fácilmente el firmware del dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Descargue el archivo de firmware en su dispositivo móvil para actualizar el firmware. Puede descargar el firmware más reciente desde el ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://download.supremainc.com/",
              children: "Centro de descargas de Suprema"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Durante la actualización del firmware, mantenga una distancia menor a 1 m entre el dispositivo y el dispositivo móvil."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "Conectar dispositivo"
          }), " para conectarse al dispositivo y actualizar el firmware."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_018",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-fwupgrade.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione el firmware desde la ruta donde se guardó el archivo de firmware. La actualización del firmware está en curso."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " para completar la actualización del firmware."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reiniciar-dispositivo",
      children: "Reiniciar dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reinicie el dispositivo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "Conectar dispositivo"
          }), " para conectarse al dispositivo y reiniciarlo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_287",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-restart.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al reiniciar el dispositivo, la conexión de comunicación BLE con el dispositivo móvil se desconectará. Habilite la función ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_276",
            product: "dev"
          }), " para reconectar automáticamente. Para obtener instrucciones detalladas de configuración, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "initial-setup#app-settings",
            children: "Configurar los ajustes de la aplicación"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inicializar-configuración",
      children: "Inicializar configuración"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inicialice la configuración del dispositivo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "Conectar dispositivo"
          }), " para conectarse al dispositivo e inicializar la configuración."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_195",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-restore-default.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si inicializa el dispositivo, todas las configuraciones aplicadas se restaurarán a los valores de fábrica. Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " para continuar."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inicializar-configuración-del-dispositivo-excepto-red",
      children: "Inicializar configuración del dispositivo excepto red"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inicialice la configuración del dispositivo excepto la de red."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "Conectar dispositivo"
          }), " para conectarse al dispositivo e inicializar la configuración del dispositivo excepto la red."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_105",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-restore-default-network.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si inicializa la configuración del dispositivo excepto la red, se inicializarán las demás configuraciones. Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " para continuar."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cambiar-contraseña-del-dispositivo",
      children: "Cambiar contraseña del dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la contraseña del dispositivo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "Conectar dispositivo"
          }), " para conectarse al dispositivo y cambiar la contraseña."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_156",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-change-password.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ingrese la contraseña actual y la nueva contraseña que utilizará."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-manager-change-password.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " para completar el cambio de contraseña."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La contraseña del dispositivo puede tener entre 6 y 32 caracteres."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Procure no perder la contraseña del dispositivo. Si pierde la contraseña del dispositivo, deberá inicializar el equipo para poder conectarse."
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