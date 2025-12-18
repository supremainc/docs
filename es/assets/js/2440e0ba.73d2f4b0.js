"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["27594"], {
78061: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_security_mdx_244_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-security-mdx-244.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_security_mdx_244_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-security","title":"Mejorar la seguridad del sistema","description":"Mejore la seguridad del sistema configurando la política de contraseñas, el cifrado de datos personales y la seguridad de comunicación entre dispositivos en BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-security.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-security","permalink":"/docs/es/platform/biostar_x/settings-system-security","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-security.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-security","title":"Mejorar la seguridad del sistema","description":"Mejore la seguridad del sistema configurando la política de contraseñas, el cifrado de datos personales y la seguridad de comunicación entre dispositivos en BioStar X.","keywords":["Seguridad del sistema","Cifrado"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Restauración del sistema","permalink":"/docs/es/platform/biostar_x/settings-system-system-restore"},"next":{"title":"Horario de Verano (DST)","permalink":"/docs/es/platform/biostar_x/settings-system-daylight-saving-time"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-security.mdx


const frontMatter = {
	id: 'settings-system-security',
	title: 'Mejorar la seguridad del sistema',
	description: 'Mejore la seguridad del sistema configurando la política de contraseñas, el cifrado de datos personales y la seguridad de comunicación entre dispositivos en BioStar X.',
	keywords: [
		'Seguridad del sistema',
		'Cifrado'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Usar la seguridad del sistema",
  "id": "usar-la-seguridad-del-sistema",
  "level": 2
}, {
  "value": "Configurar la política de contraseñas",
  "id": "password-policy-configuration",
  "level": 2
}, {
  "value": "Configurar la complejidad de la contraseña",
  "id": "configurar-la-complejidad-de-la-contraseña",
  "level": 3
}, {
  "value": "Configurar el ciclo de cambio de contraseña",
  "id": "configurar-el-ciclo-de-cambio-de-contraseña",
  "level": 3
}, {
  "value": "Configurar el límite de intentos fallidos de inicio de sesión",
  "id": "configurar-el-límite-de-intentos-fallidos-de-inicio-de-sesión",
  "level": 3
}, {
  "value": "Configurar el límite de cambio de contraseña",
  "id": "configurar-el-límite-de-cambio-de-contraseña",
  "level": 3
}, {
  "value": "Configuraciones de seguridad avanzadas",
  "id": "advanced-security-configuration",
  "level": 2
}, {
  "value": "Mejorar la protección de datos personales",
  "id": "mejorar-la-protección-de-datos-personales",
  "level": 3
}, {
  "value": "Configurar la seguridad de comunicación entre dispositivos",
  "id": "configurar-la-seguridad-de-comunicación-entre-dispositivos",
  "level": 3
}, {
  "value": "Control de acceso concurrente",
  "id": "session-security-configuration",
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
      children: ["Configure los ajustes de seguridad de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " según la política de seguridad de la organización. Configure de forma selectiva la política de contraseñas, el cifrado de datos personales, la seguridad de comunicación entre dispositivos y el control de accesos concurrentes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Verifique la política y las regulaciones de seguridad de la organización antes de mejorar la seguridad del sistema."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usar-la-seguridad-del-sistema",
      children: "Usar la seguridad del sistema"
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
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.systemSecurity",
            product: "2"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure cada elemento relacionado con la seguridad."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.systemSecurity.loginPassword",
                product: "2"
              }), ": Configure el nivel de seguridad relacionado con la contraseña de inicio de sesión. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#password-policy-configuration",
                children: "la siguiente sección"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.secure.comm.title",
                product: "2"
              }), ": Mejore la seguridad de comunicación entre la información personal y los dispositivos. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#advanced-security-configuration",
                children: "la siguiente sección"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.systemSecurity.sessionSecurity",
                product: "2"
              }), ": Mejore la seguridad de la sesión. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#session-security-configuration",
                children: "la siguiente sección"
              }), "."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Solo la primera cuenta de administrador con ID ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1"
        }), " puede usar el menú ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.secure.comm.title",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "password-policy-configuration",
      children: "Configurar la política de contraseñas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["La sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.loginPassword",
        product: "2"
      }), " establece el nivel de seguridad relacionado con la contraseña de inicio de sesión. Configure la política de contraseñas según los requisitos de seguridad de la organización."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-password.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-la-complejidad-de-la-contraseña",
      children: "Configurar la complejidad de la contraseña"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure la complejidad de las contraseñas de los usuarios. Ajuste el control deslizante de la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.passwordLevel",
        product: "2"
      }), " para definir el nivel de seguridad."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelDefault",
            product: "2"
          }), ": Permite ingresar hasta 32 caracteres."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelMedium",
            product: "2"
          }), ": Al establecer una contraseña, se requiere una combinación de 8 a 32 caracteres alfabéticos (mayúsculas o minúsculas) y números."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelStrong",
            product: "2"
          }), ": Al establecer una contraseña, se requiere una combinación de 10 a 32 caracteres alfabéticos (mayúsculas y minúsculas, con al menos una mayúscula), números y caracteres especiales."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-el-ciclo-de-cambio-de-contraseña",
      children: "Configurar el ciclo de cambio de contraseña"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para limitar el período de uso de las contraseñas, cambie el botón de la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.passwordUpdateCycle",
        product: "2"
      }), " al estado ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), ". Los usuarios deben cambiar su contraseña periódicamente según lo establecido. Si se supera el ciclo de cambio de contraseña, aparecerá un mensaje solicitando el cambio durante el inicio de sesión."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Puede configurarse de 1 a 180 días."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-el-límite-de-intentos-fallidos-de-inicio-de-sesión",
      children: "Configurar el límite de intentos fallidos de inicio de sesión"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure la cantidad de intentos fallidos permitidos y el tiempo de restricción de inicio de sesión. Si se supera la cantidad de intentos definida en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.allowLoginFailed",
        product: "2"
      }), ", no podrá iniciar sesión durante un tiempo limitado después de ingresar una contraseña incorrecta."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Esta opción está activada de forma predeterminada y restringe el inicio de sesión durante 10 minutos después de 100 intentos fallidos. Ajuste los valores o desactívelos según sea necesario."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-el-límite-de-cambio-de-contraseña",
      children: "Configurar el límite de cambio de contraseña"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para limitar la cantidad de cambios de contraseña que un usuario puede realizar en un día, cambie el botón de la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.allowPasswordChange",
        product: "2"
      }), " al estado ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), ". Los usuarios pueden cambiar la contraseña hasta el número especificado de veces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Puede configurarse hasta un máximo de 10 veces."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanced-security-configuration",
      children: "Configuraciones de seguridad avanzadas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.secure.comm.title",
        product: "2"
      }), ", puede mejorar la seguridad de la información personal y la comunicación entre dispositivos."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-advanced.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mejorar-la-protección-de-datos-personales",
      children: "Mejorar la protección de datos personales"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para minimizar el riesgo de filtraciones de datos, configure las siguientes opciones para cifrar la información personal sensible."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.sever.secure.comm.encrypt.db",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), ": Cifra y almacena los datos personales del usuario, incluidos los datos de credenciales."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.notUse",
                product: "2"
              }), ": Almacena la información personal del usuario sin cifrado. Los datos que ya están cifrados se almacenarán descifrados y los nuevos datos no se cifrarán."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.encryption_key_db",
            product: "2"
          }), ": Se utiliza para cifrar o descifrar la información almacenada en la base de datos y proteger de forma segura la información personal del usuario. Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.key_change",
            product: "2"
          }), " y establezca un nuevo valor de clave de cifrado. Cambiar la clave de cifrado vuelve a cifrar los datos que previamente estaban cifrados."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No inicie el servidor de forma forzada durante el proceso de cifrado o descifrado de la base de datos de datos personales. Pueden producirse errores como fallos de inicio de sesión o corrupción de datos. Puede tardar cierto tiempo según el tamaño de la base de datos y el rendimiento del servidor."
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsx)("summary", {
              children: "Ver los elementos de cifrado de datos personales"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Imagen de perfil"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "ID Usuario"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Nombre"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Número de teléfono"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "USER IP"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Información de correo electrónico del remitente y de los destinatarios"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "ID Inicio Sesión"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Contraseña de inicio de sesión"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Plantilla de rostro"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Plantilla de huella dactilar"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "ID Tarjeta"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Clave de layout de tarjeta inteligente"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Información personalizada para usuario y visitante"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Archivos de registros de imágenes"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Puede introducir ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.secure.comm.encryption_key_db",
              product: "2"
            }), " utilizando caracteres alfanuméricos y símbolos, para un total de 32 caracteres."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-la-seguridad-de-comunicación-entre-dispositivos",
      children: "Configurar la seguridad de comunicación entre dispositivos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure la comunicación segura entre el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " y los dispositivos de control de acceso."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.menu",
            product: "2"
          }), ": La comunicación entre el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " y los dispositivos de control de acceso puede protegerse con certificados. Si establece esta opción en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), ", el servidor genera automáticamente un certificado para enviarlo a los dispositivos y, a partir de entonces, toda la comunicación se cifrará. Los dispositivos pueden utilizar este certificado para establecer un canal seguro al intercambiar datos con el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para usar certificados externos, habilite la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.extcert.menu",
            product: "2"
          }), " y cargue el certificado raíz, el certificado de clave pública y el archivo de clave privada."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-security-advanced-with-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.data_encryption",
            product: "2"
          }), ": Puede redefinir la clave de cifrado de datos y la contraseña de administrador."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " genera o elimina certificados según el estado de configuración del dispositivo y los ajustes de comunicación segura, y no vuelve a crear el mismo certificado anterior. Por ejemplo, si el ajuste de Comunicación segura con el dispositivo se cambia en el orden de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), ", el certificado creado se eliminará automáticamente. Cuando el ajuste se cambia en el orden de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), ", se ejecuta la operación ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Crear certificado A"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Eliminar certificado A"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Crear certificado B"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si establece la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.sever.secure.comm.menu",
              product: "2"
            }), " en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), " mientras el dispositivo está físicamente desconectado de la red, se eliminará el certificado almacenado en el dispositivo. En este caso, el dispositivo no podrá reconectarse. Para volver a conectarlo, debe eliminarse el certificado guardado en el dispositivo o restablecer el dispositivo a los valores de fábrica. Para obtener más información, consulte el manual del dispositivo."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: ["Ver los dispositivos y versiones de firmware compatibles con la función ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.menu",
            product: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2 FW 1.1.0 o posterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation A2 FW 1.5.0 o posterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 2 FW 1.6.0 o posterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation L2 FW 1.3.0 o posterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Firmware de BioLite N2 1.0.0 o posterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry P2 FW 1.1.0 o posterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry W2 FW 1.2.0 o posterior"
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
              children: "CoreStation FW 1.1.0 o posterior"
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
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "session-security-configuration",
      children: "Control de acceso concurrente"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.sessionSecurity",
        product: "2"
      }), ", limite los inicios de sesión duplicados para la misma cuenta para mejorar la seguridad. Establezca la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.useSimultaneousConnection",
        product: "2"
      }), " en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.inactive",
        product: "2"
      }), ". Cuando haya intentos de inicio de sesión concurrentes para la misma cuenta, se cerrará la sesión de los usuarios existentes."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-session.png",
      className: "none"
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