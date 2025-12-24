"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4206"], {
68271: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_server_mdx_f8c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-server-server-mdx-f8c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_server_mdx_f8c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-server-server","title":"Configuración detallada del servidor","description":"Guía sobre la información básica del servidor BioStar X, la gestión de usuarios y dispositivos, la asignación de servidores, los niveles de registro del sistema y la configuración para guardar imágenes faciales.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-server-server","permalink":"/docs/es/platform/biostar_x/settings-server-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-server-server.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-server-server","title":"Configuración detallada del servidor","description":"Guía sobre la información básica del servidor BioStar X, la gestión de usuarios y dispositivos, la asignación de servidores, los niveles de registro del sistema y la configuración para guardar imágenes faciales.","keywords":["Servidor","Gestión Usuarios","Gestión Dispositivos","Coincidencia en el servidor","Registro del sistema"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración del servidor","permalink":"/docs/es/platform/biostar_x/settings-server"},"next":{"title":"Instalar Certificado HTTPS","permalink":"/docs/es/platform/biostar_x/settings-server-https"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-server.mdx


const frontMatter = {
	id: 'settings-server-server',
	title: 'Configuración detallada del servidor',
	description: 'Guía sobre la información básica del servidor BioStar X, la gestión de usuarios y dispositivos, la asignación de servidores, los niveles de registro del sistema y la configuración para guardar imágenes faciales.',
	keywords: [
		'Servidor',
		'Gestión Usuarios',
		'Gestión Dispositivos',
		'Coincidencia en el servidor',
		'Registro del sistema'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configuración de información básica",
  "id": "basic-setting",
  "level": 2
}, {
  "value": "Gestión de usuarios y dispositivos",
  "id": "user-and-device-management",
  "level": 2
}, {
  "value": "Configuración de tarjetas AoC",
  "id": "aoc-card-setting",
  "level": 3
}, {
  "value": "Otros ajustes",
  "id": "other-settings",
  "level": 3
}, {
  "value": "Server matching",
  "id": "servermatching",
  "level": 2
}, {
  "value": "Configuración del nivel de registro del sistema",
  "id": "systemloglevel",
  "level": 2
}, {
  "value": "Guardar imágenes faciales",
  "id": "storevisualfaceimage",
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
  }, {Cmd, Details, DocLink, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la configuración de información básica del servidor BioStar X, la gestión de usuarios y dispositivos, la asignación de servidores, los niveles de registro del sistema y la configuración para guardar imágenes faciales."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.server",
            product: "2"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure los elementos deseados en cada sección."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.general",
                product: "2"
              }), ": Configure la dirección IP, el número de puerto, el tiempo de expiración de la sesión, el método de carga de registros de eventos y el período de retención de registros."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.userDeviceManagement",
                product: "2"
              }), ": Cambie la configuración de gestión de usuarios y dispositivos."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.logLevelManagement",
                product: "2"
              }), ": Cambie la configuración del nivel de registro del sistema."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.expertSettings.title",
                product: "2"
              }), ": Configure para guardar tanto la imagen real como la plantilla del rostro, o guardar solo la plantilla sin almacenar la imagen real."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior derecha de la pantalla para guardar los ajustes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basic-setting",
      children: "Configuración de información básica"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Verifique o configure la información básica de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.general",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-general.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarIPAdress",
            product: "2"
          }), ": Verifique la dirección IP del servidor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.logUploadType",
            product: "2"
          }), ": Seleccione un método de carga de registros de eventos. Si la comunicación en tiempo real con el servidor es difícil, configure esta opción en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.manual",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarPort",
            product: "2"
          }), ": Cambie el puerto del servidor. Introduzca el número de puerto deseado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.logRetainDays",
            product: "2"
          }), ": Establezca el período de retención de registros de 1 a 120 días."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.sessionTimeout",
            product: "2"
          }), ": Configure un período de expiración de sesión. Si no hay operación después de iniciar sesión en BioStar X durante el tiempo configurado, la sesión se cerrará automáticamente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-and-device-management",
      children: "Gestión de usuarios y dispositivos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.userDeviceManagement",
        product: "2"
      }), ", configure los métodos de sincronización y autenticación entre usuarios y dispositivos."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-management.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-sync",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.automaticUserSync",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.automaticUserSync",
        product: "2"
      }), ", elija cómo sincronizar la información de usuario entre el servidor y los dispositivos."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.allDevices",
            product: "2"
          }), ": La información de usuario se sincroniza automáticamente entre el servidor y todos los dispositivos registrados."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.deviceSync",
            product: "2"
          }), ": La información de usuario del servidor se sincroniza con todos los dispositivos registrados en el servidor. Sin embargo, la información de usuario modificada en el dispositivo no se sincroniza con el servidor; solo la información de usuario añadida en el dispositivo se sincroniza con el servidor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.smartSync",
            product: "2"
          }), ": Solo los dispositivos que pertenecen a un grupo de acceso con cambios se sincronizan automáticamente con el servidor."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si selecciona la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), ", los usuarios guardados en dispositivos que no pertenecen al grupo de acceso no podrán ser gestionados por el servidor. Para usar esta opción, vaya a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.device.root"
            }), ", seleccione cada dispositivo y luego haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " para proceder con la sincronización. Para más información sobre la función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-using-functions",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Incluso si selecciona la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), ", los grupos de acceso especiales designados para fines específicos se sincronizarán independientemente del grupo de acceso del dispositivo."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Grupo de acceso de autenticación dual configurado en Dispositivos y Elevadores."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Grupo Always pass para la configuración anti-passback"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Grupo Always pass para la configuración de bloqueo programado"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Grupo de acceso de autenticación abierta para la configuración de apertura programada"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Grupo Access/Deactivate para la configuración de guardia"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Incluso si selecciona la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), ", los usuarios designados como administradores del dispositivo se sincronizarán independientemente del grupo de acceso."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fingerprint-template-format",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.fingerprintTemplateFormat",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.fingerprintTemplateFormat",
        product: "2"
      }), ", elija el formato de plantilla de huella digital. Seleccione entre los siguientes elementos."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "SUPREMA"
          }), ": Formato de plantilla de huella digital de Suprema. Se utiliza al enrolar huellas digitales en dispositivos Suprema."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "ISO"
          }), ": Formato internacional de plantilla de huella digital ISO."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "ANSI378"
          }), ": Formato de plantilla de huella digital definido por el American National Standards Institute (ANSI)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Si existen plantillas de huellas digitales de usuario en el dispositivo, no se pueden cambiar a otro formato."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userid-type",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType",
        product: "2"
      }), ", seleccione el tipo de ID de usuario como ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType.numeric",
        product: "2"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType.alphanumeric",
        product: "2"
      }), ". Revise la lista de dispositivos registrados en el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " y seleccione la configuración compatible."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: ["Ver los dispositivos y las versiones de firmware que pueden cambiar ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.userDevice.useridType",
          product: "2"
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Versión de firmware de CoreStation 1.0.0 o superior"
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
            children: "BioEntry W2 FW 1.1.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation L2 FW 1.2.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation A2 FW 1.3.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2 FW 1.4.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioLite N2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de BioEntry P2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry R2 FW 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Firmware de XPass 2 1.0.0 o posterior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Versión de firmware de XPass D2 1.0.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 versión de firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Cambiar de ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.userDevice.useridType.alphanumeric",
          product: "2"
        }), " a ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.userDevice.useridType.numeric",
          product: "2"
        }), " requiere eliminar toda la información de usuario registrada en ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enrollment-device",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.enrollment_device.title",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para mayor comodidad, añada dispositivos usados con frecuencia para enrolar huellas digitales, rostros o tarjetas en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.enrollment_device.title",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " para añadir un dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.enrollment_device.configure.title",
            product: "2"
          }), ", haga clic en la casilla de verificación del dispositivo deseado en la lista."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-management-enroll-device.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " para añadir el dispositivo seleccionado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la esquina inferior derecha de la pantalla para guardar la configuración del dispositivo añadido."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si resulta difícil localizar un dispositivo registrado en la lista debido a la gran cantidad, ingrese palabras clave en el campo de búsqueda para encontrar dispositivos. Ingrese el ID del dispositivo, el nombre del dispositivo, el grupo de dispositivos y la dirección IP."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Para obtener más información sobre cómo enrolar credenciales de huella dactilar, rostro o tarjeta, consulte lo siguiente:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-fingerprint"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-face"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-card"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-mobile"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-field",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.custom_field.title",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.custom_field.title",
        product: "2"
      }), ", agregue campos para ingresar información adicional del usuario. Los campos agregados se mostrarán en la pantalla de información del usuario."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " para agregar un campo de usuario personalizado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ingrese el nombre del campo de usuario personalizado y seleccione el tipo de elemento deseado."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-management-custome-field.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.numericbox",
                product: "2"
              }), ": Permite ingresar valores de 0 a 4294962795; no se pueden ingresar caracteres."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.textbox",
                product: "2"
              }), ": Permite ingresar hasta 32 caracteres entre números y letras."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.combobox",
                product: "2"
              }), ": Permite agregar hasta 20 elementos de 32 caracteres; cada elemento se separa con punto y coma (;). (p. ej., Seleccion1;Seleccion2;Seleccion3)"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-server-management-custome-field-select.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.fileupload",
                product: "2"
              }), ": Permite agregar un campo para cargar archivos."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "El tamaño máximo del archivo es 1MB."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "El nombre del archivo puede contener un mínimo de 1 carácter y un máximo de 120 caracteres."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Requisitos del nombre de archivo: el nombre debe usar caracteres alfanuméricos, guiones bajos (", (0,jsx_runtime.jsx)(_components.code, {
                      children: "_"
                    }), ") y guiones (", (0,jsx_runtime.jsx)(_components.code, {
                      children: "-"
                    }), "), y debe usar un punto (", (0,jsx_runtime.jsx)(_components.code, {
                      children: "."
                    }), ") para separar la extensión."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior derecha de la pantalla para guardar el campo de usuario personalizado agregado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Modifique los números en la columna ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.order",
              product: "2"
            }), " para cambiar el orden de los campos de usuario personalizados. La posición de ese campo cambiará."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " en la parte inferior derecha de la pantalla después de modificar los campos de usuario personalizados."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " para eliminar un campo de usuario personalizado. Los campos eliminados no se pueden recuperar."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre el registro y la modificación de información del usuario, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "how-to-guide-user",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La información del usuario con campos personalizados añadidos se puede imprimir en una tarjeta. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-card-printer#adding-custom-user-fields",
              children: "el siguiente enlace"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aoc-card-setting",
      children: "Configuración de tarjetas AoC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Habilite la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.deleteCredentialAfterAOC",
        product: "2"
      }), " para emitir una credencial ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#access_on_card",
        children: "Access on Card (AoC)"
      }), " que almacena las credenciales del usuario en una tarjeta y elimina la información personal y los datos de credenciales del servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: ["Ver dispositivos y versiones de firmware que admiten ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "tarjetas móviles NFC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Sistema operativo del dispositivo móvil: Android 5.0 Lollipop o superior, Android 10 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar X Mobile 1.0.0 o superior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 2: BS2-OMPW, BS2-OIPW FW 1.4 o superior, FW 1.8 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation A2: BSA2-OMPW, BSA2-OIPW FW 1.3 o superior, FW 1.7.1 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation L2: BSL2-OM FW 1.2 o superior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry W2: BEW2-OAP, BEW2-ODP FW 1.1 o superior, FW 1.5 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2: FS2-D, FS2-AWB FW 1.3.1 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2: BLN2-ODB, BLN2-OAB, BLN2-PAB FW 1.2 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass D2: XPD2-MDB, XPD2-GDB, XPD2-GKDB FW 1.3 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite: FL-DB FW 1.1 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2: XP2-MDPB, XP2-GDPB, XP2-GKDPB, XP2-MAPB FW 1.0 o superior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry P2: BEP2-OD, BEP2-OA FW 1.0 o superior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry R2: BER2-OD FW v1.1.0 o superior"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: ["Ver dispositivos y versiones de firmware que admiten ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "tarjetas móviles BLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Sistema operativo del dispositivo móvil: Android 5.0 Lollipop o superior, Android 10 o anterior / iOS 9.0 o superior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar X Mobile 1.0.0 o superior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2: FS2-AWB FW 1.3.1 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2: BLN2-ODB, BLN2-OAB, BLN2-PAB FW 1.2 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass D2: XPD2-MDB, XPD2-GDB, XPD2-GKDB FW 1.3 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite: FL-DB FW 1.1 o anterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2: XP2-MDPB, XP2-GDPB, XP2-GKDPB, XP2-MAPB FW 1.0 o superior"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Las funciones ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.mobileCredentialCard",
            product: "2"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), " no se pueden utilizar al mismo tiempo."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "other-settings",
      children: "Otros ajustes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.eventLogRetainDays",
            product: "2"
          }), ": Configure el período de retención de los registros de eventos de control de acceso."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.hideCredentialFaces",
            product: "2"
          }), ": Para proteger la información personal de los usuarios, la imagen de vista previa se puede ocultar durante el registro de credenciales faciales. Cuando esta opción está habilitada, la pantalla de vista previa no se mostrará al enrolar credenciales faciales de los usuarios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "servermatching",
      children: "Server matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.serverMatching",
        product: "2"
      }), ", configure la función de ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#server_matching",
        children: "server matching"
      }), " para autenticar la información del usuario en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " sin autenticarla en el dispositivo."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-server-matching.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.use",
            product: "2"
          }), ": Activa/desactiva la función de server matching."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.matchingConcurrencyCount",
            product: "2"
          }), ": Configure cuántas coincidencias pueden realizarse simultáneamente."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Esta opción puede variar según el rendimiento de la CPU de la PC servidor donde esté instalado ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.fingerPrint",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.serverMatching.fastMode",
                product: "2"
              }), ": Configure la velocidad de coincidencia de huellas dactilares."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.serverMatching.securityLevel",
                product: "2"
              }), ": Configure el nivel de seguridad de coincidencia del servidor para huellas dactilares. Cuanto más alto sea el nivel de seguridad, mayor puede ser la tasa de rechazo falso (FRR)."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.face",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.serverMatching.securityLevel",
              product: "2"
            }), ": Configure el nivel de seguridad de coincidencia del servidor para rostros IR. Cuanto más alto sea el nivel de seguridad, mayor puede ser la tasa de rechazo falso (FRR)."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching",
          product: "2"
        }), " está disponible cuando los complementos de funciones se habilitan con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " o superior. Para obtener más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "systemloglevel",
      children: "Configuración del nivel de registro del sistema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevelManagement",
        product: "2"
      }), ", configure el nivel de registros del sistema que se almacenan en la base de datos."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-system-log-level.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los registros del sistema se gestionan según categorías predefinidas, y los niveles de registro se clasifican en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.trace",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.debug",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.info",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.warning",
        product: "2"
      }), " y ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.error",
        product: "2"
      }), ". El nivel más alto incluye todos los registros de los niveles inferiores. Por ejemplo, al seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.trace",
        product: "2"
      }), ", se incluirán y guardarán todos los registros de los niveles inferiores ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.debug",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.info",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.warning",
        product: "2"
      }), " y ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.error",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "storevisualfaceimage",
      children: "Guardar imágenes faciales"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Al inscribir un rostro como credencial, se puede configurar para guardar tanto la imagen real como la plantilla, o guardar solo la plantilla sin la imagen real."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Antes de usar"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Antes de activar la opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.expertSettings.enableOptionLabel",
          product: "2"
        }), ", guarda primero cualquier cambio realizado en el menú ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.server",
          product: "2"
        }), ". Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " en la parte inferior derecha de la pantalla."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.title",
            product: "2"
          }), ", establece la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.enableOptionLabel",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-expert.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.enableButton",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al ingresar a la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.title",
            product: "2"
          }), ", configura la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-expert2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), ": Este es el valor predeterminado. Guarda tanto la imagen real como la plantilla de la credencial de rostro."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.notUse",
                product: "2"
              }), ": No guarda la imagen real de la credencial de rostro y guarda solo la plantilla. Lee detenidamente la ventana emergente de advertencia que aparece al seleccionar esta opción antes de configurarla."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Precauciones al desactivar la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel",
            product: "2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si desactivas esta función, se eliminarán todas las imágenes faciales almacenadas y las futuras inscripciones de rostro guardarán solo las plantillas, excluyendo las imágenes."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["No es posible desactivar esta función si las imágenes faciales inscritas no tienen ambos tipos de plantillas. Para obtener más información sobre la función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.faceMigration"
            }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "migration-face",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Después de desactivar esta función, si incluyes plantillas de imagen facial inválidas en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "menu.dataImport",
              product: "2"
            }), ", no podrás importar el archivo de datos. Para resolver este problema, habilita temporalmente esta función antes de importar el archivo de datos."]
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