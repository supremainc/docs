"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["92013"], {
77232: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_ip_camera_support_and_configuration_mdx_b2e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-ip-camera-support-and-configuration-mdx-b2e.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_ip_camera_support_and_configuration_mdx_b2e_namespaceObject = JSON.parse('{"id":"platform/biostar_air/ip-camera-support-and-configuration","title":"Soporte y configuración de cámaras IP","description":"Configura cámaras IP compatibles con ONVIF en BioStar Air, administra transmisiones de video en vivo y grabadas e integra las grabaciones de las cámaras con los eventos de acceso.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/ip-camera-support-and-configuration.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/ip-camera-support-and-configuration","permalink":"/docs/es/platform/biostar_air/ip-camera-support-and-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/ip-camera-support-and-configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"ip-camera-support-and-configuration","title":"Soporte y configuración de cámaras IP","description":"Configura cámaras IP compatibles con ONVIF en BioStar Air, administra transmisiones de video en vivo y grabadas e integra las grabaciones de las cámaras con los eventos de acceso.","keywords":["Cámara IP","BioStar Air","configuración de la cámara"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configurar el intercomunicador SIP en BioStation 3","permalink":"/docs/es/platform/biostar_air/sip-intercom-for-biostation3"},"next":{"title":"Configurar el módulo seguro SIO2","permalink":"/docs/es/platform/biostar_air/configuring-the-sio2-secure-module"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/ip-camera-support-and-configuration.mdx


const frontMatter = {
	id: 'ip-camera-support-and-configuration',
	title: 'Soporte y configuración de cámaras IP',
	description: 'Configura cámaras IP compatibles con ONVIF en BioStar Air, administra transmisiones de video en vivo y grabadas e integra las grabaciones de las cámaras con los eventos de acceso.',
	keywords: [
		'Cámara IP',
		'BioStar Air',
		'configuración de la cámara'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Compatibilidad",
  "id": "compatibility",
  "level": 2
}, {
  "value": "Resumen de la funcionalidad",
  "id": "functionality",
  "level": 2
}, {
  "value": "Instrucciones",
  "id": "instructions",
  "level": 2
}, {
  "value": "Conectar cámaras IP",
  "id": "conectar-cámaras-ip",
  "level": 3
}, {
  "value": "Iniciar sesión en BioStar Air",
  "id": "iniciar-sesión-en-biostar-air",
  "level": 3
}, {
  "value": "Habilitar la gestión de video",
  "id": "habilitar-la-gestión-de-video",
  "level": 3
}, {
  "value": "Añadir cámara",
  "id": "añadir-cámara",
  "level": 3
}, {
  "value": "Vincular a una puerta",
  "id": "vincular-a-una-puerta",
  "level": 3
}, {
  "value": "Ver video en vivo de la cámara",
  "id": "ver-video-en-vivo-de-la-cámara",
  "level": 3
}, {
  "value": "Ver video grabado de la cámara",
  "id": "ver-video-grabado-de-la-cámara",
  "level": 3
}, {
  "value": "Ver video del evento",
  "id": "ver-video-del-evento",
  "level": 3
}, {
  "value": "Lista de dispositivos probados y verificados",
  "id": "tested-devices",
  "level": 2
}, {
  "value": "Habilitar ONVIF en una cámara IP",
  "id": "habilitar-onvif-en-una-cámara-ip",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air detecta automáticamente las cámaras IP conectadas a la misma red que los lectores compatibles con BioStar Air. Como las cámaras utilizan el dispositivo como puerta de enlace, no se requiere un grabador de video en red (NVR); en su lugar, las cámaras emplean el almacenamiento integrado en la tarjeta SD."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Con un lector compatible con BioStar Air instalado, BioStar Air puede mostrar las siguientes transmisiones en vivo simultáneas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hasta dos cámaras en resolución Full HD (1080p)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hasta cuatro cámaras en resolución HD (720p)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Estas especificaciones se duplican cuando se utiliza la X-Station 2."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si un video grabado no se reproduce después de registrar la cámara en BioStar Air, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/video-troubleshooting"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compatibility",
      children: "Compatibilidad"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Perfiles ONVIF"
          }), ": La cámara IP debe ser compatible con el perfil ONVIF S o G."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Perfil Onvif S"
              }), ": transmisión de video en vivo"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Perfil ONVIF G"
              }), ": video grabado almacenado en la tarjeta SD"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tarjeta SD"
          }), ": La cámara IP debe tener una tarjeta SD integrada para que las grabaciones puedan reproducirse posteriormente."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Utilice SanDisk microSDXC Class10 Max Endurance de 256 GB o 512 GB."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Codificación"
          }), ": La cámara debe soportar H.264 (AVC) y este debe configurarse como el códec activo. BioStar Air actualmente no es compatible con H.265."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Marcas recomendadas"
          }), ": Las cámaras HanwhaVision, Hikvision y Dahua son altamente compatibles. La compatibilidad con otras marcas puede variar según el cumplimiento del perfil Onvif. Para conocer la lista de dispositivos probados y verificados, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#tested-devices"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Comuníquese con el equipo de servicio para probar otras marcas de cámaras."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functionality",
      children: "Resumen de la funcionalidad"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Realice las siguientes acciones en el portal de BioStar Air o en la aplicación móvil."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ver transmisiones en vivo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ver grabaciones de las cámaras."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Acceder a grabaciones de las cámaras relacionadas con eventos de acceso."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instructions",
      children: "Instrucciones"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "conectar-cámaras-ip",
          children: "Conectar cámaras IP"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Conexión de red"
              }), ": Asegúrese de que la cámara IP esté en la misma red que el lector compatible con BioStar Air."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Habilitar Onvif"
              }), ": Asegúrese de que Onvif esté activado en la cámara."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Registro del dispositivo"
              }), ": Asegúrese de que el dispositivo esté registrado en el portal de BioStar Air."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "iniciar-sesión-en-biostar-air",
          children: "Iniciar sesión en BioStar Air"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Los administradores con rol ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "master"
          }), " pueden cambiar la configuración del sitio, como habilitar la gestión de video. Inicie sesión en el ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com/",
            children: "portal de BioStar Air"
          }), " con privilegios de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "master"
          }), "."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "habilitar-la-gestión-de-video",
          children: "Habilitar la gestión de video"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_qr_reader_tab",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Habilitar ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_video_management",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-addtional-feature-video-mangement.png"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Solo los administradores con nivel ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "master"
            }), " pueden habilitar esta función."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "añadir-cámara",
          children: "Añadir cámara"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "cameras_groups_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-camera.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "cameras_list_title_add_button",
                product: "air"
              }), " en la esquina superior derecha de la pantalla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "cameras_templ_title_modal",
                product: "air"
              }), ", seleccione el dispositivo que actuará como puerta de enlace."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-camera-add.png",
              caption: true
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Ingrese la siguiente información para agregar la cámara."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "cameras_add_camera_input_name",
                    product: "air"
                  }), ": Ingrese el nombre de la cámara."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "event_logs_column3",
                    product: "air"
                  }), ": Seleccione un nombre para identificar la cámara."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "cameras_add_camera_input_id",
                    product: "air"
                  }), ": Ingrese el ID para conectarse a la cámara."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "cameras_add_camera_input_pass",
                    product: "air"
                  }), ": Ingrese la contraseña para conectarse a la cámara."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " para agregar la cámara seleccionada."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "El dispositivo debe ejecutar la versión de firmware 2.5.1 o posterior y estar en la misma red que la cámara."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStar Air detecta automáticamente las cámaras en la red."
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "vincular-a-una-puerta",
          children: "Vincular a una puerta"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Vincule la cámara agregada a una puerta para asociar el video con los eventos de acceso."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Haz clic en la puerta en la lista para asignarle una cámara."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "edit_door.title",
                product: "air"
              }), ", desplácese hasta ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_auxiliary_device",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Seleccione la cámara que agregó en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column6",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-door-assign-camera.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " para guardar los cambios."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ver-video-en-vivo-de-la-cámara",
          children: "Ver video en vivo de la cámara"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ver video en vivo de las cámaras agregadas. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "realtime_video_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-realtime-camera.png",
          caption: true
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Ver hasta dos transmisiones en vivo Full HD (1080p) por cada lector instalado compatible con BioStar Air."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Agrega más dispositivos o reduce la resolución de la cámara para ver más transmisiones en vivo."
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_menu",
                  product: "air"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "cameras_groups_submenu",
                  product: "air"
                }), " → Haz clic en la cámara de la lista → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "cameras_edit_camera_name_profile",
                  product: "air"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ver-video-grabado-de-la-cámara",
          children: "Ver video grabado de la cámara"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ver transmisiones de video grabadas. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "recorded_video_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-recorded-camera.png",
          caption: true
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ver-video-del-evento",
          children: "Ver video del evento"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " en la barra lateral izquierda. Busca un registro de evento con un clip de video asociado y haz clic en reproducir para verlo."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tested-devices",
      children: "Lista de dispositivos probados y verificados"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Fabricante"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Número de modelo"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Tipo de dispositivo"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Perfil Onvif"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Resolución"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "QNV-C8011R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T, M"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2592x1944"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "QND-6022R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MMI-600R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD2025FWD-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD2166G2-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "3200×1800"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD1121-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "7"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DHI-NVR2104HS-P-S3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NVR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "12MP"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IPC-HDBW3249E-AS-NI"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SD22204UEN-GN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DH-IPC-HFW1230DT-STW-VN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "11"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Marruy"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IPC-A32E-L"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2304×1296"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "12"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TP-Link"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Tapo C210"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cámara"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2304×1296"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "habilitar-onvif-en-una-cámara-ip",
      children: "Habilitar ONVIF en una cámara IP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Abre un navegador web e ingresa la dirección IP de la cámara."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Autentícate con credenciales de administrador e inicia sesión."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ve a la sección ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Red"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuración"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Activa ONVIF o la interfaz abierta de video en red."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Crea un perfil de usuario solo para ONVIF si es necesario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Guarda la configuración y prueba la conexión ONVIF en BioStar Air."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Actualización de firmware"
            }), ": Actualiza la cámara y el dispositivo al firmware más reciente."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Redirección de puertos"
            }), ": Configura la redirección de puertos para ONVIF si es necesario."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Herramientas de terceros"
            }), ": Usa ONVIF Device Manager para verificar la configuración y el funcionamiento de la cámara."]
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