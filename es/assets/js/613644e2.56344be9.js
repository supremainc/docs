"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["39407"], {
32222: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_card_printer_mdx_613_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-card-printer-mdx-613.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_card_printer_mdx_613_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-card-printer","title":"Impresora de Tarjetas","description":"Imprima tarjetas con el diseño deseado integrando BioStar X y cardPresso.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-card-printer.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-card-printer","permalink":"/docs/es/platform/biostar_x/settings-card-printer","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-card-printer.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-card-printer","title":"Impresora de Tarjetas","description":"Imprima tarjetas con el diseño deseado integrando BioStar X y cardPresso.","keywords":["cardPresso","IMPRESORA DE TARJETAS"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar Grupos Identificación Facial IR","permalink":"/docs/es/platform/biostar_x/settings-credential-ir-face-group-matching"},"next":{"title":"Configuración de correo electrónico","permalink":"/docs/es/platform/biostar_x/settings-email-setting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-card-printer.mdx


const frontMatter = {
	id: 'settings-card-printer',
	title: 'Impresora de Tarjetas',
	description: 'Imprima tarjetas con el diseño deseado integrando BioStar X y cardPresso.',
	keywords: [
		'cardPresso',
		'IMPRESORA DE TARJETAS'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*New → Shortcut*/


const toc = [{
  "value": "Antes de comenzar",
  "id": "antes-de-comenzar",
  "level": 2
}, {
  "value": "Instalar y configurar cardPresso",
  "id": "installing-configuring-cardPresso",
  "level": 3
}, {
  "value": "Conectar cardPresso con BioStar X",
  "id": "conectar-cardpresso-con-biostar-x",
  "level": 2
}, {
  "value": "Imprimir de prueba la plantilla de tarjeta",
  "id": "imprimir-de-prueba-la-plantilla-de-tarjeta",
  "level": 2
}, {
  "value": "Imprimir plantillas de tarjetas por usuario",
  "id": "printing-card-template-per-user",
  "level": 2
}, {
  "value": "Añadir campos de usuario personalizados",
  "id": "adding-custom-user-fields",
  "level": 2
}, {
  "value": "ID de atributo de la plantilla de tarjetas",
  "id": "card-template-attribute-ids",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imprima tarjetas con el diseño deseado integrando ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " y cardPresso. cardPresso es un software profesional para el diseño e impresión de tarjetas. Con cardPresso cree diversas plantillas de tarjetas y organice la información del usuario en consecuencia."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instale el programa cardPresso y conéctelo a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " para usar la función de impresora de tarjetas de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Se requiere una licencia de la edición XXL de cardPresso para utilizar la función de servidor de impresión web del programa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre los tipos de licencias del programa cardPresso, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.cardpresso.com/cardpresso-software/editions/",
              children: "el siguiente enlace"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La función de servidor de impresión web solo es compatible con sistemas operativos Windows."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installing-configuring-cardPresso",
      children: "Instalar y configurar cardPresso"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga los pasos siguientes para instalar el programa cardPresso y configurar el servidor de impresión web."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La ruta del menú o la pantalla pueden variar según la versión de instalación."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Descargue la última versión de cardPresso compatible con el sistema operativo del PC que operará como servidor de impresión web desde ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.cardpresso.com/downloads-cp",
            children: "cardPresso Download"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Instale el programa y active la licencia emitida por cardPresso."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Después de ejecutar cardPresso, cree una plantilla de tarjeta."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/cardpresso-new-card-template.png",
          alone: true,
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Guarde la plantilla de tarjeta creada en la ubicación deseada en el servidor donde está instalado ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". (p. ej. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "C:\\template\\example.card"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic con el botón derecho en el escritorio del PC donde está instalado cardPresso y luego seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Nuevo"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Acceso directo"
          }), " en el menú emergente. "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Introduzca lo siguiente en el campo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ubicación del elemento"
          }), " y luego haga clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Siguiente"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"C:\\Program Files (x86)\\cardPresso\\cardPresso.exe\" /PRINTSERVER\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cardpresso-print-server-short-cut.png",
          width: 400
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "La ruta donde está instalado cardPresso puede variar según el entorno de instalación. Después de confirmar la ruta donde está instalado cardPresso, modifíquela según corresponda conforme a la ruta anterior."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Introduzca un nombre para el acceso directo y haga clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Finalizar"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga doble clic en el icono de acceso directo del servidor de impresión web de cardPresso creado en el escritorio para ejecutarlo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana del servidor de impresión web de cardPresso, haga clic en el icono ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuración"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-installation2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Dirección"
              }), ": Introduzca la dirección IP del equipo que actúa como servidor de impresión web."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Puerto"
              }), ": Número de puerto en el que cardPresso recibe las operaciones de impresión."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Grupos de usuarios permitidos"
              }), ": Seleccione un grupo de usuarios que tenga acceso al servidor de impresión web."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Guardar"
          }), " cuando finalice la configuración."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-card-printer-play.png",
            ico: true,
            alone: true
          }), " en la esquina inferior derecha para iniciar el servicio. Si la configuración es correcta, el icono cambia a ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-card-printer-stop.png",
            ico: true,
            alone: true
          }), " y aparece el mensaje ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "listen OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-installation3.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "No cierre la ventana hasta que la impresión de tarjetas se haya completado."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conectar-cardpresso-con-biostar-x",
      children: "Conectar cardPresso con BioStar X"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure cardPresso como se muestra a continuación para conectarlo a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
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
          children: ["En la barra lateral izquierda, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Active ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.cardpressoSetting",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), " y luego complete cada elemento."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.id",
                product: "2"
              }), ": Introduzca su ID de inicio de sesión de cardPresso. (predeterminado: ADMIN)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.password",
                product: "2"
              }), ": Introduzca su contraseña de inicio de sesión de cardPresso. (predeterminado: admin)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.ipAddress",
                product: "2"
              }), ": Introduzca la dirección IP del PC que ejecuta el servidor de impresión web de cardPresso."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.ipAddressPort",
                product: "2"
              }), ": Introduzca el número de puerto que cardPresso utiliza para recibir operaciones de impresión."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.printerName",
                product: "2"
              }), ": Introduzca el nombre de la impresora que se utilizará como impresora de tarjetas. Se encuentra en el ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Panel de control"
              }), " de Windows → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Dispositivos e impresoras"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.cardTemplate",
                product: "2"
              }), ": Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.plusAdd",
                product: "2"
              }), " para añadir un ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.cardTemplate",
                product: "2"
              }), ". En el elemento ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.card_template.configure.th.name",
                product: "2"
              }), ", introduzca la ruta completa, incluido el nombre de archivo y la extensión de la plantilla de tarjeta."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "El nombre de archivo de la plantilla de tarjeta puede contener caracteres alfanuméricos y especiales."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Se admiten hasta 20 plantillas de tarjetas."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Ruta de ejemplo: C:\\template\\example.card"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.printTestLabel",
                product: "2"
              }), ": Imprima de prueba la plantilla de tarjeta."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez que complete la configuración, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imprimir-de-prueba-la-plantilla-de-tarjeta",
      children: "Imprimir de prueba la plantilla de tarjeta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imprima de prueba una plantilla de tarjeta con información del administrador."
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
          children: ["En la barra lateral izquierda, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione la plantilla de tarjeta que desea imprimir y luego haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.testPrint",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer1.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Se imprime la plantilla de tarjeta con información del administrador."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "printing-card-template-per-user",
      children: "Imprimir plantillas de tarjetas por usuario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imprima tarjetas con plantillas de tarjetas por usuario."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.dialog.newUser"
          }), " en la parte superior derecha de la pantalla. Aparece la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.dialog.newUser"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Complete el formulario y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.printCard",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cada elemento puede contener caracteres alfanuméricos y especiales."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione la plantilla de tarjeta que desea imprimir y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.print",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user1.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana emergente que pregunta si desea imprimir la tarjeta, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.ok",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user2.png",
          className: "none"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Se creará un nuevo usuario y se imprimirá una tarjeta como plantilla de tarjeta con la información del usuario."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-custom-user-fields",
      children: "Añadir campos de usuario personalizados"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imprima una tarjeta con una plantilla de tarjeta que incluya un campo de usuario personalizado."
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
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.server"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.userDeviceManagement",
            product: "2"
          }), ", haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.title",
            product: "2"
          }), " para ingresar un ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.name",
            product: "2"
          }), " y seleccionar un ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.type",
            product: "2"
          }), ". El orden en que agregues ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.title",
            product: "2"
          }), " determina el ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ID"
          }), " del elemento de la plantilla de tarjetas."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-custom-user.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Según el ID de elemento de BioStar X, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Orden 1"
          }), " equivale a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CUSTOM1"
          }), ". Para obtener más información sobre el ID de atributo de BioStar X, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#card-template-attribute-ids",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez que completes la configuración, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "File"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Open Template"
          }), " en el programa cardPresso para abrir el archivo de plantilla de tarjeta. Agrega un nuevo elemento e ingresa el ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ID"
          }), " como ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "XML item ID name"
          }), " en el orden de IDs de elementos de BioStar X."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando finalices la configuración, haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "File"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Regresa a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " y selecciona el usuario al que aplicarás la plantilla de tarjeta en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifica los campos de usuario personalizados que agregaste. Completa según el formulario y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.printCard",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-custom-user1.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione la plantilla de tarjeta que desea imprimir y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.print",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user1.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana emergente que pregunta si desea imprimir la tarjeta, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.ok",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user2.png",
          className: "none"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La información del usuario se guarda y la tarjeta se imprime como una plantilla con los campos de usuario personalizados."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "card-template-attribute-ids",
      children: "ID de atributo de la plantilla de tarjetas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los IDs de atributos compatibles en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " son los siguientes. Asegúrate de ingresar ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "XML item ID name"
      }), " como ID de elemento al crear una plantilla de tarjetas."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x cols3--20-40-40",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Índice"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Datos de usuario de BioStar X"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Nombre de ID de elemento XML"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "ID Usuario"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "ID"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Nombre Usuario"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "NAME"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Email"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "EMAIL"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Departamento"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "DEPARTMENT"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Teléfono"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "TELEPHONE"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Filtro Grupo Usuarios"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "GROUP"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "7"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Foto de perfil"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "PHOTO"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Campo personalizado 1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM1"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Campo personalizado 2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM2"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Campo personalizado 3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM3"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "11"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Campo personalizado 4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM4"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "12"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Campo personalizado 5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM5"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "13"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Campo personalizado 6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM6"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "14"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Campo personalizado 7"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM7"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "15"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Campo personalizado 8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM8"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "16"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Campo personalizado 9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM9"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "17"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Campo personalizado 10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM10"
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