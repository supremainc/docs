"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["54716"], {
88381: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_video_integration_mdx_166_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-video-integration-mdx-166.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_video_integration_mdx_166_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-video-integration","title":"Integrar VMS","description":"Esta guía explica cómo integrar el Sistema de Gestión de Video (VMS) para el monitoreo en tiempo real y la reproducción de video en BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-video-integration.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-video-integration","permalink":"/docs/es/platform/biostar_x/settings-video-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-video-integration.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-video-integration","title":"Integrar VMS","description":"Esta guía explica cómo integrar el Sistema de Gestión de Video (VMS) para el monitoreo en tiempo real y la reproducción de video en BioStar X.","keywords":["Video","Integración","Cámara","Ajustes"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración de video","permalink":"/docs/es/platform/biostar_x/settings-videos"},"next":{"title":"Configurar la cámara","permalink":"/docs/es/platform/biostar_x/settings-videos-camera"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-video-integration.mdx


const frontMatter = {
	id: 'settings-video-integration',
	title: 'Integrar VMS',
	description: 'Esta guía explica cómo integrar el Sistema de Gestión de Video (VMS) para el monitoreo en tiempo real y la reproducción de video en BioStar X.',
	keywords: [
		'Video',
		'Integración',
		'Cámara',
		'Ajustes'
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
  "value": "Configuración de integración del servidor VMS",
  "id": "configuración-de-integración-del-servidor-vms",
  "level": 2
}, {
  "value": "Instalar el certificado en el servidor VMS",
  "id": "install-vms-certification",
  "level": 3
}, {
  "value": "Activar la integración de VMS",
  "id": "activar-la-integración-de-vms",
  "level": 3
}, {
  "value": "Reiniciar el servicio",
  "id": "reiniciar-el-servicio",
  "level": 3
}, {
  "value": "Comprobar y configurar cámaras",
  "id": "comprobar-y-configurar-cámaras",
  "level": 3
}, {
  "value": "Solución de problemas",
  "id": "video-troubleshooting",
  "level": 3
}, {
  "value": "Instalación de certificado en PC cliente",
  "id": "install-client-certification",
  "level": 4
}, {
  "value": "Configuración de eventos y marcadores de VMS",
  "id": "vms-event-bookmark",
  "level": 2
}, {
  "value": "Desconectar la integración del servidor VMS",
  "id": "desconectar-la-integración-del-servidor-vms",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start, Step, Steps, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["El ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sistema de Gestión de Video"
      }), " (VMS) es un sistema de gestión de video que integra y administra video de múltiples cámaras, lo que permite la grabación y la reproducción. La integración de BioStar X con VMS permite gestionar el control de acceso y la seguridad de video en una sola plataforma."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La integración con VMS ofrece los siguientes beneficios."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoreo en tiempo real"
          }), ": Visualiza video en tiempo real de las cámaras conectadas a las puertas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gestión de eventos integrada"
          }), ": Comprende las situaciones de seguridad enlazando los eventos de acceso con video."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recopilación de evidencia eficiente"
          }), ": Busca y reproduce rápidamente video grabado de momentos específicos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Función de marcadores"
          }), ": Agrega etiquetas de video a momentos de eventos importantes para facilitar su búsqueda y revisión."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Antes de integrar el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sistema de Gestión de Video"
      }), " (VMS), verifica lo siguiente."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La función de integración de VMS está disponible como opción adicional para licencias superiores a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced"
          }), ". Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "licensing#features-add-ons",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Asegúrate de que el servidor VMS esté instalado y configurado correctamente. El servidor VMS debe estar en un estado que permita la conexión en línea con ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Utiliza un VMS compatible con ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Utiliza ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X VMS"
          }), " o la serie ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Nx Witness v5.1.5"
          }), " de VMS."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prepara la dirección IP, el número de puerto y la información de la cuenta de administrador del servidor VMS. Esta información es necesaria para conectar el servidor VMS con ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-de-integración-del-servidor-vms",
      children: "Configuración de integración del servidor VMS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sigue los pasos a continuación para integrar el servidor VMS con ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "install-vms-certification",
          children: "Instalar el certificado en el servidor VMS"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Para reproducir video grabado desde el servidor VMS, se debe usar el protocolo HTTPS. Genera un certificado basado en dirección IP en el servidor VMS."
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Antes de instalar el certificado, asegúrate de que Open JDK 21 o superior esté instalado en el PC donde se encuentra instalado el VMS."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Si instalas el servidor VMS y ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " en el mismo servidor, debes instalar un certificado."]
              }), "\n"]
            }), "\n"]
          })
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ve a la ruta ", (0,jsx_runtime.jsx)(_components.em, {
                children: "C:\\Program Files\\BioStar X\\third"
              }), " y ejecuta la consola de comandos."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Ejecuta el siguiente comando."
            }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
              groupId: "os",
              defaultValue: "Windows",
              children: [(0,jsx_runtime.jsx)(TabItem, {
                value: "Windows",
                children: (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-java",
                    children: "java -Xverify:none -jar scaleUtil-1.0-obfuscated.jar vmsCertCreate \"C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\<%VENDOR.NAME%>\\<%VENDOR.NAME%> Media Server\\ssl\" {VMS_IP_ADDRESS}\n"
                  })
                })
              }), (0,jsx_runtime.jsx)(TabItem, {
                value: "Linux",
                children: (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-java",
                    children: "java -Xverify:none -jar scaleUtil-1.0-obfuscated.jar vmsCertCreate \"/opt/<%VENDOR.NAME%>/mediaserver/var/ssl\" {VMS_IP_ADDRESS}\n"
                  })
                })
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Ingresa la ruta donde está instalado el VMS en la sección ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "<%VENDOR.NAME%>"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Ingresa la dirección IP del servidor VMS en la sección ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "{VMS_IP_ADDRESS}"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["La ruta ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "ssl"
                  }), " puede variar según el producto VMS instalado."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Verifica si el archivo de certificado (", (0,jsx_runtime.jsx)(_components.em, {
                children: ".pem"
              }), ") se creó en la ruta donde está instalado el VMS."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Reinicia el servidor VMS."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el VMS está instalado en un servidor diferente de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ", copia el archivo ", (0,jsx_runtime.jsx)(_components.em, {
              children: "scaleUtil-1.0-all.jar"
            }), " al servidor VMS y sigue los pasos anteriores."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "activar-la-integración-de-vms",
          children: "Activar la integración de VMS"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
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
              children: ["En la barra lateral izquierda, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.video.root"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.video.vmsIntegration"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Si es la primera vez que accedes, inicia sesión con la cuenta de administrador de ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-video-integration-login.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Establece la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "video.setting.integration.title",
                product: "2"
              }), " en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-video-integration.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Ingresa la información del servidor VMS."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.serverAddress",
                    product: "2"
                  }), ": Ingresa la dirección IP del servidor VMS."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.port",
                    product: "2"
                  }), ": Ingresa el número de puerto del servidor VMS."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.loginId",
                    product: "2"
                  }), ": Ingresa el ID de la cuenta de administrador del servidor VMS."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.password",
                    product: "2"
                  }), ": Ingresa la contraseña de la cuenta de administrador del servidor VMS."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Después de ingresar toda la información del servidor VMS, haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.apply",
                product: "2"
              }), " en la parte inferior derecha de la pantalla."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Si la integración con el servidor VMS falla y aparece un mensaje de error, verifica nuevamente la dirección del servidor y la información de la cuenta de administrador. También es necesario comprobar si el servidor VMS está en línea y si las conexiones de red están bloqueadas por la configuración del firewall."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre la configuración en la sección ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "video.setting.tag.title",
                  product: "2"
                }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#vms-event-bookmark",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "reiniciar-el-servicio",
          children: "Reiniciar el servicio"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La primera vez que integres con el servidor VMS, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " reiniciará automáticamente el servicio. Si no se reinicia automáticamente, sigue las instrucciones a continuación para reiniciar el servicio manualmente."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Service Manager"
              }), " en Windows."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la lista ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "All Services"
              }), ", haz clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Stop"
              }), " de los siguientes servicios para detenerlos."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-sm-restart-service-video.png",
              alone: true
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar X Unified Gateway Service"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar X Core Web Service"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando el estado del servicio solicitado cambie de ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Pending"
              }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Stopped"
              }), ", haz clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Start"
              }), " para reiniciar el servicio."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-sm-restart-service-video-start.png",
              alone: true
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "comprobar-y-configurar-cámaras",
          children: "Comprobar y configurar cámaras"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si el servidor VMS se integra correctamente, verifica las cámaras conectadas en el menú ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), ". Para más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-camera",
            children: "lo siguiente"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-troubleshooting",
      children: "Solución de problemas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si se presentan las siguientes situaciones, instala el certificado desde el servidor VMS en el PC cliente para resolver el problema."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al acceder al ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sistema de Gestión de Video"
          }), " (VMS) a través del navegador y aparece una advertencia \"No es seguro\""]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando el video en tiempo real se reproduce en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " pero el video grabado no se reproduce"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "install-client-certification",
      children: "Instalación de certificado en PC cliente"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Descargue el instalador del certificado HTTPS (", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), ") desde la pantalla de inicio de sesión o desde ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), " en la PC cliente donde está instalado ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Descomprima el archivo descargado y ejecute el archivo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), ". Aparecerá la ventana ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment Certification"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "VMS"
          }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), " e ingrese la siguiente información."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-vms-certification.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              }), ": dirección IP del servidor VMS"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port"
              }), ": número de puerto del servidor VMS"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifique el mensaje de advertencia de seguridad y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Yes"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reinicie el navegador web y verifique que el video grabado del servidor VMS se reproduzca normalmente en la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-event-bookmark",
      children: "Configuración de eventos y marcadores de VMS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Transmita etiquetas de marcador e información de etiquetas de eventos al servidor VMS integrado. En este punto, elija transmitir también los registros de eventos, nombres de puertas, nombres de dispositivos e ID de usuario. Seleccione las opciones deseadas y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " en la parte inferior derecha de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-event-bookmark.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.language",
            product: "2"
          }), ": Elija el idioma de las etiquetas de eventos y marcadores que se enviarán al servidor VMS. Seleccione coreano o inglés."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.tag.bookmark",
            product: "2"
          }), ": Las etiquetas de marcador permiten ubicar y revisar fácilmente los videos almacenados en el servidor VMS mediante designaciones y nombres para una identificación rápida. Seleccione la información que se enviará con la etiqueta de marcador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.tag.event",
            product: "2"
          }), ": Transmita los eventos ocurridos en momentos específicos al servidor VMS para su registro. Seleccione la información que se enviará con la etiqueta de evento."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la función de marcadores en VMS, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://resources.vmsproxy.com/nx_6.0_help/using_bookmarks.html",
              children: "el siguiente enlace"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la función de eventos en VMS, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://resources.vmsproxy.com/nx_6.0_help/events_available_in_vms.html",
              children: "el siguiente enlace"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "desconectar-la-integración-del-servidor-vms",
      children: "Desconectar la integración del servidor VMS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga los siguientes pasos para desconectar el servidor VMS integrado. Al desconectar la integración de VMS se eliminarán todos los ajustes de video, cámaras registradas y reglas."
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
          children: ["En la barra lateral izquierda, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.vmsIntegration"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.integration.title",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.notUse",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Revise el contenido de la ventana de mensajes y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "."]
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