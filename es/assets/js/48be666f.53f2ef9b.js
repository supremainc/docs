"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49861"], {
76392: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biostation_3_max_authentication_mdx_48b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-biostation-3-max-authentication-mdx-48b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biostation_3_max_authentication_mdx_48b_namespaceObject = JSON.parse('{"id":"device/biostation_3_max/authentication","title":"Autenticación","description":"Describe los métodos de autenticación compatibles y los procedimientos de autenticación.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/biostation_3_max/authentication.mdx","sourceDirName":"device/biostation_3_max","slug":"/device/biostation_3_max/authentication","permalink":"/docs/es/device/biostation_3_max/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3_max/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"Autenticación","description":"Describe los métodos de autenticación compatibles y los procedimientos de autenticación.","keywords":["Modo de autenticación","Operación","PIN","Rostro","T&A (Tiempo y Asistencia)"],"isTranslationMissing":false},"sidebar":"biostation3max","previous":{"title":"Usuario","permalink":"/docs/es/device/biostation_3_max/user"},"next":{"title":"Ajustes","permalink":"/docs/es/device/biostation_3_max/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/biostation_3_max/authentication.mdx


const frontMatter = {
	id: 'authentication',
	title: 'Autenticación',
	description: 'Describe los métodos de autenticación compatibles y los procedimientos de autenticación.',
	keywords: [
		'Modo de autenticación',
		'Operación',
		'PIN',
		'Rostro',
		'T&A (Tiempo y Asistencia)'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Modo de autenticación",
  "id": "modo-de-autenticación",
  "level": 2
}, {
  "value": "Registrar modo de autenticación",
  "id": "registering-auth-mode",
  "level": 3
}, {
  "value": "Modificar modo de autenticación",
  "id": "modificar-modo-de-autenticación",
  "level": 3
}, {
  "value": "Eliminar modo de autenticación",
  "id": "eliminar-modo-de-autenticación",
  "level": 3
}, {
  "value": "Operación",
  "id": "operación",
  "level": 2
}, {
  "value": "Coincidencia en el servidor",
  "id": "coincidencia-en-el-servidor",
  "level": 3
}, {
  "value": "Autenticación QR",
  "id": "autenticación-qr",
  "level": 3
}, {
  "value": "PIN",
  "id": "pin",
  "level": 2
}, {
  "value": "Opciones de visualización del resultado de autenticación",
  "id": "opciones-de-visualización-del-resultado-de-autenticación",
  "level": 2
}, {
  "value": "Rostro",
  "id": "rostro",
  "level": 2
}, {
  "value": "Huella <Badge>BS3M-ODB, BS3M-OAPB</Badge>",
  "id": "fingerprint",
  "level": 2
}, {
  "value": "T&amp;A (Tiempo y Asistencia)",
  "id": "ta-tiempo-y-asistencia",
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
  }, {Badge, Cmd, Image} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Describe los métodos de autenticación compatibles y los procedimientos de autenticación."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modo-de-autenticación",
      children: "Modo de autenticación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configura el modo de autenticación. Combine ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_228",
        product: "dev"
      }), "PIN, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_040",
        product: "dev"
      }), "Tarjeta / código QR", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_312",
        product: "dev"
      }), ", y ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_020",
        product: "dev"
      }), "ID", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_323",
        product: "dev"
      }), " para crear modos de autenticación y establecer un horario para cada modo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La autenticación por huella está disponible solo en BS3M-ODB y BS3M-OAPB."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registering-auth-mode",
      children: "Registrar modo de autenticación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add.svg",
            ico: true,
            alone: true
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al presionar ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add1.svg",
            ico: true,
            alone: true
          }), ", se mostrará en la pantalla la credencial que se puede añadir. Selecciona las credenciales que deseas añadir. Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-cancel.svg",
            ico: true,
            alone: true
          }), " mientras la credencial esté añadida para eliminarla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-add-auth-mode.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-face-bs3m.png",
                ico: true,
                alone: true
              }), ": Rostro, ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-fingerprint-bs3m.png",
                ico: true,
                alone: true
              }), ": Huella, ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-qr-bs3m.png",
                ico: true,
                alone: true
              }), ": Tarjeta / código QR, ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bs3m.png",
                ico: true,
                alone: true
              }), ": ID, ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs3m.png",
                ico: true,
                alone: true
              }), ": PIN"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Combine los métodos de autenticación seleccionados para autenticar todos en orden o elija autenticar solo algunos de ellos. Por ejemplo, con la combinación ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-qr-bs3m.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-face-bs3m.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs3m.png",
                ico: true,
                alone: true
              }), ", autentíquese con tarjeta / código QR, rostro y PIN. Con la combinación ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-qr-bs3m.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-face-bs3m.png",
                ico: true,
                alone: true
              }), " / ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs3m.png",
                ico: true,
                alone: true
              }), ", primero autentíquese con tarjeta / código QR y luego presente el rostro o ingrese el PIN."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de configurar el modo de autenticación deseado, configure ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_203",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_203",
                  product: "dev"
                }), " se puede configurar en BioStar X. Si no se establece un horario, solo se puede seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_361",
                  product: "dev"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_203",
                  product: "dev"
                }), ", consulte la ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/settings-schedule",
                  children: "Guía del administrador de BioStar X"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para usar la autenticación ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_042",
                  product: "dev"
                }), ", debe hacer clic en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_256",
                  product: "dev"
                }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_265",
                  product: "dev"
                }), " debe tener activado ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_041",
                  product: "dev"
                }), ", además se requiere una licencia de dispositivo adicional. Para obtener más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings#license",
                  children: "Licencia"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para guardar la configuración, presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modificar-modo-de-autenticación",
      children: "Modificar modo de autenticación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona el modo de autenticación que deseas modificar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Modifique el modo de autenticación consultando ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-auth-mode",
            children: "Registrar modo de autenticación"
          }), " y presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eliminar-modo-de-autenticación",
      children: "Eliminar modo de autenticación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), " y seleccione el modo de autenticación que desea eliminar. Es posible seleccionar varias opciones."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para eliminar el elemento seleccionado, presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operación",
      children: "Operación"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coincidencia-en-el-servidor",
      children: "Coincidencia en el servidor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura la coincidencia con el servidor."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de presionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", active ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_265",
            product: "dev"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_187",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-operation.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_187",
              product: "dev"
            }), ": Cuando se configura la coincidencia con el servidor, la autenticación del usuario la realiza BioStar X sin que el dispositivo realice la autenticación. Se puede usar cuando el dispositivo tiene demasiada información de usuarios o cuando el dispositivo está instalado en exteriores."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_185",
                  product: "dev"
                }), " solo puede usar tarjetas e IDs."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Si usa ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_185",
                  product: "dev"
                }), ", debe habilitar la coincidencia con el servidor tanto en el dispositivo como en BioStar X. Para obtener más información sobre la configuración de coincidencia con el servidor en BioStar X, consulte la ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/settings-server-server#servermatching",
                  children: "Guía del administrador de BioStar X"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autenticación-qr",
      children: "Autenticación QR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Active la autenticación mediante código QR."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de presionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", active ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_265",
            product: "dev"
          }), " para ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_041",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-operation.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_041",
                product: "dev"
              }), ": Configure si desea usar la autenticación por código QR mediante la cámara del dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_329",
                product: "dev"
              }), ": Puede configurar la autenticación con un código QR que contenga los mismos datos que la tarjeta CSN o Wiegand emitida al usuario. Esto solo se puede configurar cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_041",
                product: "dev"
              }), " está activado."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Se requiere una licencia de dispositivo adicional para usar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_041",
              product: "dev"
            }), ". Para obtener más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings#license",
              children: "Licencia"
            }), "."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pin",
      children: "PIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura si se utiliza el teclado aleatorio al ingresar contraseñas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de presionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", configure si desea usar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_040",
            product: "dev"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_204",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-pin.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_204",
              product: "dev"
            }), ": Las posiciones de las teclas numéricas se pueden mezclar aleatoriamente al ingresar una contraseña para evitar filtraciones."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "opciones-de-visualización-del-resultado-de-autenticación",
      children: "Opciones de visualización del resultado de autenticación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura la opción de visualización del resultado de autenticación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de presionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", cambie los elementos deseados en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_259",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-auth-result-display-option.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_169",
                product: "dev"
              }), ": Seleccione cómo aparece el ID de usuario en la pantalla de resultados de autenticación del dispositivo."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_307",
                    product: "dev"
                  }), ": Mostrar el ID de usuario completo."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_316",
                    product: "dev"
                  }), ": Mostrar solo el primer carácter del ID de usuario."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_357",
                    product: "dev"
                  }), ": No mostrar el ID de usuario."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_177",
                product: "dev"
              }), ": Seleccione cómo aparece el nombre de usuario en la pantalla de resultados de autenticación del dispositivo."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_307",
                    product: "dev"
                  }), ": Mostrar el nombre de usuario completo."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_316",
                    product: "dev"
                  }), ": Mostrar solo el primer carácter del nombre de usuario."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_357",
                    product: "dev"
                  }), ": No mostrar el nombre de usuario."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rostro",
      children: "Rostro"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la configuración de la autenticación facial."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_228",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cambie el elemento deseado."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-face.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_140",
                product: "dev"
              }), ": Configure la sensibilidad para detectar movimiento alrededor del dispositivo. Cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_140",
                product: "dev"
              }), " se establece en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_091",
                product: "dev"
              }), ", toque la pantalla para autenticar su rostro."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_115",
                product: "dev"
              }), ": Si el rostro no se registra dentro del tiempo establecido, el registro se cancelará."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_260",
                product: "dev"
              }), ": Si la autenticación no se completa dentro del tiempo establecido, esta fallará."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_117",
                product: "dev"
              }), ": Puede verificar rostros duplicados durante el registro de rostro."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_229",
                product: "dev"
              }), ": Configure la posición y el tamaño del área donde el dispositivo detecta rostros durante la autenticación."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para un rendimiento óptimo, se recomienda usar la configuración predeterminada de las subopciones de ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_229",
                  product: "dev"
                }), ". Los valores predeterminados de cada opción son los siguientes:"]
              }), (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Ángulo máximo de orientación de la cabeza: 15"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Distancia de detección: mín. 30 cm, máx. 100 cm"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Búsqueda amplia: desactivada"
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_060",
                product: "dev"
              }), ": Al activar ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_060",
                product: "dev"
              }), ", puede enrolar la ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_340",
                product: "dev"
              }), " emitida por BioStar X. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_340",
                product: "dev"
              }), " permite la autenticación biométrica sin almacenar datos del usuario en el servidor de BioStar X, en Airfob Portal ni en el dispositivo, ya que guarda la plantilla biométrica del usuario en una tarjeta de acceso móvil."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_340",
                  product: "dev"
                }), ", consulte la ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/enroll-credential-mobile#template-on-mobile",
                  children: "Guía del administrador de BioStar X"
                }), "."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_157",
                product: "dev"
              }), ": Puede configurar para almacenar tanto las imágenes reales como las plantillas en Visual Face, o para guardar solo las plantillas sin almacenar las imágenes reales. Si se desactiva, se eliminarán todas las imágenes almacenadas de rostros visuales y los rostros visuales enrolados posteriormente almacenarán solo las plantillas, sin imágenes."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "Para administrar esta configuración, utilice Biostar 2 v2.9.7 o superior."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_149",
                product: "dev"
              }), ": Puede configurar el nivel de seguridad para la autenticación 1", ":N", "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_278",
                product: "dev"
              }), ": Puede configurar el modo de funcionamiento del dispositivo para la autenticación facial."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_359",
                    product: "dev"
                  }), ": La coincidencia visual e infrarroja funciona conjuntamente para aumentar la precisión de la autenticación facial."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_159",
                    product: "dev"
                  }), ": Los usuarios pueden autenticarse rápidamente mientras caminan dentro del rango de autenticación del dispositivo."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_247",
                product: "dev"
              }), ": Puede evitar la autenticación con rostros suplantados, como fotografías. Se activa cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_278",
                product: "dev"
              }), " se establece en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_359",
                product: "dev"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "El rendimiento de la función anti-spoofing facial se ha mejorado para aprobar la prueba iBeta Level 1 ISO 30107-3 de detección de ataques de presentación."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Con luz solar intensa, se recomienda usar la función ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_247",
                      product: "dev"
                    }), " como ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_152",
                      product: "dev"
                    }), "."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_070",
                product: "dev"
              }), ": Puede cambiar la configuración avanzada de la autenticación facial, como la detección de mascarilla."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), ": Puede configurar si desea usar la detección de mascarilla."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_067",
                    product: "dev"
                  }), ": Puede configurar el método para verificar si se lleva mascarilla. Se activa cuando ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), " se establece en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_161",
                    product: "dev"
                  }), "."]
                }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
                  type: "info",
                  children: (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_127",
                          product: "dev"
                        }), ": A los usuarios que no lleven mascarilla se les niega la autenticación y se registra un evento de incumplimiento de mascarilla."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_126",
                          product: "dev"
                        }), ": Los usuarios que no lleven mascarilla aún pueden autenticarse, pero se registra un evento de incumplimiento de mascarilla."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_125",
                          product: "dev"
                        }), ": Solo los usuarios que no lleven mascarilla pueden autenticarse y, cuando se utiliza este modo, el modo de verificación de mascarilla se fija en ", (0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_369",
                          product: "dev"
                        }), "."]
                      }), "\n"]
                    }), "\n"]
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_124",
                    product: "dev"
                  }), ": Configure la sensibilidad para detectar el uso de mascarilla. Se activa cuando ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), " se establece en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_161",
                    product: "dev"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_368",
                    product: "dev"
                  }), ": Configure el modo de confirmación según el propósito del dispositivo."]
                }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
                  type: "info",
                  children: (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_267",
                          product: "dev"
                        }), ": Después de la autenticación, verifica si el usuario lleva mascarilla."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_369",
                          product: "dev"
                        }), ": Autentica después de comprobar si el usuario lleva mascarilla."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_370",
                          product: "dev"
                        }), ": El dispositivo solo se puede usar para verificar si se lleva mascarilla. Cuando este modo está activado, cualquier usuario que lleve mascarilla puede acceder, sin importar la autenticación."]
                      }), "\n"]
                    }), "\n"]
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "fingerprint",
      children: ["Huella ", (0,jsx_runtime.jsx)(Badge, {
        only: true,
        children: "BS3M-ODB, BS3M-OAPB"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambia los ajustes de autenticación por huella digital."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_312",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cambie el elemento deseado."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/auth-fingerprint.png",
          width: 300
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_149",
                product: "dev"
              }), ": Puede configurar el nivel de seguridad para la autenticación 1", ":N", "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_130",
                product: "dev"
              }), ": Configure el tiempo de espera para la comparación de huellas. Si la autenticación no se completa dentro del tiempo establecido, falla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_254",
                product: "dev"
              }), ": Ver la imagen sin procesar al escanear una huella."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_197",
                product: "dev"
              }), ": Configure la sensibilidad del sensor de huellas. Establece la sensibilidad más alta para obtener información de huella dactilar precisa."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_003",
                product: "dev"
              }), ": Configure el rendimiento de la autenticación por huella. Cuando selecciona ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_275",
                product: "dev"
              }), ", la velocidad de autenticación se ajusta según el número total de plantillas de huellas almacenadas en el dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_342",
                product: "dev"
              }), ": Configure el formato de la plantilla de huella. El valor predeterminado es ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_057",
                product: "dev"
              }), ". Cambiar el formato de la plantilla bloquea el uso de todas las huellas dactilares almacenadas previamente, así que procede con precaución."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_198",
                product: "dev"
              }), ": Defínalo en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_277",
                product: "dev"
              }), " para encender el sensor de huella cuando detecte el dedo del usuario. Defínalo en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_362",
                product: "dev"
              }), " para mantener el sensor siempre encendido, incluso cuando no se estén escaneando huellas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_249",
                product: "dev"
              }), ": Configure el nivel de detección de huellas falsas. Niveles más altos de detección de huellas falsas pueden aumentar las tasas de rechazo de las huellas reales."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_116",
                product: "dev"
              }), ": Inspeccione la calidad de la huella escaneada para guardar datos de alta calidad. Cuando está activado, el dispositivo notifica al usuario si la calidad de la huella es baja y le ayuda a escanear correctamente."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_118",
                product: "dev"
              }), ": Verifique huellas duplicadas durante el enrolamiento."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ta-tiempo-y-asistencia",
      children: "T&A (Tiempo y Asistencia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura cómo registrar el modo T&A."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_079",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cambie el elemento deseado."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-ta.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), ": Configure cómo usar el modo de asistencia."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_086",
                product: "dev"
              }), ": Agregue eventos de tiempo y asistencia. Para registrar eventos de asistencia, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_086",
                product: "dev"
              }), " → ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add.svg",
                ico: true,
                alone: true
              }), " y luego configure el icono que se mostrará en la pantalla, ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_085",
                product: "dev"
              }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_203",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_082",
                product: "dev"
              }), ": Exija a los usuarios seleccionar un evento de tiempo y asistencia durante la autenticación. Disponible cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), " está configurado en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_199",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_081",
                product: "dev"
              }), ": Permita a los usuarios usar solo los eventos de tiempo y asistencia seleccionados por el administrador. Disponible cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), " está configurado en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_071",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_279",
                product: "dev"
              }), ": Seleccione si desea usar códigos de trabajo."]
            }), "\n"]
          }), "\n"]
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