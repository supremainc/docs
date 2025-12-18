"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["72022"], {
6962: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_network_mdx_6d8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-network-mdx-6d8.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_network_mdx_6d8_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-network","title":"Configuración de red","description":"Directrices para la configuración de red, como TCP/IP, RS-485 y la comunicación con el servidor para el dispositivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-network.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-network","permalink":"/docs/es/platform/biostar_x/settings-device-details-network","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-network.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-network","title":"Configuración de red","description":"Directrices para la configuración de red, como TCP/IP, RS-485 y la comunicación con el servidor para el dispositivo.","keywords":["Dispositivo","Red","TCP/IP","RS-485","Comunicación con el servidor","Comunicación serial","Esclavo inteligente"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Ajuste de Información Básica","permalink":"/docs/es/platform/biostar_x/settings-device-details-info"},"next":{"title":"Configuración De Autenticación","permalink":"/docs/es/platform/biostar_x/settings-device-details-auth"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-network.mdx


const frontMatter = {
	id: 'settings-device-details-network',
	title: 'Configuración de red',
	description: 'Directrices para la configuración de red, como TCP/IP, RS-485 y la comunicación con el servidor para el dispositivo.',
	keywords: [
		'Dispositivo',
		'Red',
		'TCP/IP',
		'RS-485',
		'Comunicación con el servidor',
		'Comunicación serial',
		'Esclavo inteligente'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ajustes de TCP/IP",
  "id": "ajustes-de-tcpip",
  "level": 2
}, {
  "value": "Ajustes de IP dinámica",
  "id": "ajustes-de-ip-dinámica",
  "level": 3
}, {
  "value": "Ajustes de IP estática",
  "id": "ajustes-de-ip-estática",
  "level": 3
}, {
  "value": "Ajustes de LAN inalámbrica",
  "id": "ajustes-de-lan-inalámbrica",
  "level": 2
}, {
  "value": "Ajustes de comunicación con el servidor",
  "id": "ajustes-de-comunicación-con-el-servidor",
  "level": 2
}, {
  "value": "Configuración de comunicación serial",
  "id": "configuración-de-comunicación-serial",
  "level": 2
}, {
  "value": "Ajustes de esclavo inteligente",
  "id": "ajustes-de-esclavo-inteligente",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["A continuación se muestran los ajustes de red del dispositivo registrado. En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.network",
        product: "2"
      }), ", configure la red TCP/IP, RS-485 y la comunicación con el servidor del dispositivo."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-network.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las opciones de red disponibles pueden variar según el tipo de dispositivo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el usuario ha realizado cambios, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), ". Los cambios no se aplicarán al dispositivo si no se guardan."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ajustes-de-tcpip",
      children: "Ajustes de TCP/IP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tcpIpSetting",
        product: "2"
      }), ", configure la dirección IP del dispositivo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la configuración de la dirección IP durante el registro del dispositivo, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-adding-devices#setipaddress",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ajustes-de-ip-dinámica",
      children: "Ajustes de IP dinámica"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Seleccione la casilla de la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.useDhcp",
        product: "2"
      }), " para configurar el dispositivo con IP dinámica. El dispositivo recibirá automáticamente una dirección IP del servidor DHCP, la cual puede cambiar. En ese caso, la dirección IP del dispositivo puede cambiar."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ajustes-de-ip-estática",
      children: "Ajustes de IP estática"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Desactive la casilla de la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.useDhcp",
        product: "2"
      }), " para asignar una dirección IP estática al dispositivo. Ingrese la información de red del dispositivo en los campos siguientes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipdOsdpID",
            product: "2"
          }), ": Ingrese la dirección OSDP del dispositivo. Debe ser un número entre 0 y 126."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.subnetMask",
            product: "2"
          }), ": Ingrese la máscara de subred del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.gateway",
            product: "2"
          }), ": Ingrese la dirección de puerta de enlace del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.devicePort",
            product: "2"
          }), ": Ingrese el número de puerto del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.dnsServerAddress",
            product: "2"
          }), ": Ingrese la dirección del servidor DNS del dispositivo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "Ver dispositivos y versiones de firmware que pueden aceptar direcciones de servidor DNS"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioStation L2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioStation A2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioStation 2 1.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioLite Net 2.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioEntry Plus 2.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioEntry W 2.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de XPass 2.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de XPass S2 2.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de FaceStation 2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioLite N2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de FaceLite 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de XPass 2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation F2 versión de firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 versión de firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 versión de firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ajustes-de-lan-inalámbrica",
      children: "Ajustes de LAN inalámbrica"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.wlan",
        product: "2"
      }), ", active o desactive los ajustes de LAN inalámbrica del dispositivo. Los ajustes detallados están disponibles en la guía del usuario del dispositivo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Consulte los siguientes dispositivos que admiten ajustes de LAN inalámbrica:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation A2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation 2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ajustes-de-comunicación-con-el-servidor",
      children: "Ajustes de comunicación con el servidor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.server",
        product: "2"
      }), ", configure cómo se comunica el dispositivo con el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceToServerConnection",
            product: "2"
          }), ": Al seleccionar esta opción, ingrese la dirección IP y el número de puerto del servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " al que se conectará el dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverIP",
            product: "2"
          }), ": Ingrese la dirección IP o el nombre de dominio del servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverPort",
            product: "2"
          }), ": Ingrese el número de puerto del servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Esta función es útil cuando cambia la dirección IP del servidor ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". Si configura previamente esta opción en varios dispositivos antes de cambiar la dirección IP del servidor, los dispositivos se conectarán automáticamente a la dirección IP actualizada."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: ["Ver dispositivos y versiones de firmware que permiten ingresar nombres de dominio en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.serverIP",
          product: "2"
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioStation L2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioStation A2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioStation 2 1.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioEntry W2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioEntry P2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de FaceStation 2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de FaceLite 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation F2 versión de firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioLite N2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioLite Net 2.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioEntry Plus 2.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioEntry W 2.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de XPass 2.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de XPass S2 2.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de XPass 2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 versión de firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 versión de firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-de-comunicación-serial",
      children: "Configuración de comunicación serial"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.serialSetting",
        product: "2"
      }), ", configure el modo, el rendimiento de transmisión y la visualización de resultados de autenticación para dispositivos conectados mediante RS-485."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.rs485",
            product: "2"
          }), ": Configure el modo RS-485."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.baudRate",
            product: "2"
          }), ": Configure el rendimiento de comunicación RS-485."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdpAuthResult",
            product: "2"
          }), ": Seleccione el resultado de autenticación que se mostrará en la pantalla del dispositivo cuando se utilice con un controlador de terceros."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.osdpControllerResult",
                product: "2"
              }), ": Permite mostrar en el dispositivo el resultado de autenticación del controlador de terceros."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.osdpDeviceResult",
                product: "2"
              }), ": Permite mostrar el resultado de autenticación del propio dispositivo."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.osdpAuthResult",
          product: "2"
        }), " se habilita cuando la opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.rs485",
          product: "2"
        }), " está configurada en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.rs485.slave",
          product: "2"
        }), " o ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.rs485.default",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ajustes-de-esclavo-inteligente",
      children: "Ajustes de esclavo inteligente"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.intelligentPD",
        product: "2"
      }), ", cuando un usuario se autentica con huella digital en un entorno donde los dispositivos Suprema están conectados a controladores de terceros, el resultado de la autenticación se envía como datos de tarjeta OSDP (Open Supervised Device Protocol) para admitir numerosos emparejamientos 1:1 o 1", ":N", "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipdUseFailCode",
            product: "2"
          }), ": Cuando utilice el esclavo inteligente, si ocurre una excepción, como un fallo de autenticación, ingrese el código de excepción en formato decimal (0-18446744073709551615) o hexadecimal (0-FFFFFFFFFFFFFFFF) para registrar un log preciso. El valor hexadecimal puede introducirse con números o letras."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-edit-network-exception-code.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipdCardFormat",
            product: "2"
          }), ": Permite enviar el ID de tarjeta o el ID de usuario tras una autenticación exitosa."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipdOsdpID",
            product: "2"
          }), ": Ingrese la dirección OSDP del dispositivo. Debe ser un número entre 0 y 126."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Puede introducir datos de hasta 8 bytes en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.ipdUseFailCode",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.intelligentPD",
              product: "2"
            }), " se habilita cuando la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.rs485",
              product: "2"
            }), " está configurada en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.rs485.default",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: ["Ver dispositivos y versiones de firmware que admiten la opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.intelligentPD",
          product: "2"
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioEntry W2 1.6.3 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioStation L2 1.6.1 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioEntry P2 1.4.1 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de XPass 2 1.2.3 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de X-Station 2 1.1.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioLite N2 1.4.1 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de FaceStation F2 1.1.2 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 versión de firmware 1.0.0 o superior"
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