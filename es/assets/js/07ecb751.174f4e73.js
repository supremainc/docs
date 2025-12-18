"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49172"], {
98434: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_facestation_f_2_authentication_mdx_07e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-facestation-f-2-authentication-mdx-07e.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_facestation_f_2_authentication_mdx_07e_namespaceObject = JSON.parse('{"id":"device/facestation_f2/authentication","title":"Autenticación","description":"Describe los métodos de autenticación compatibles y los procedimientos de autenticación.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/facestation_f2/authentication.mdx","sourceDirName":"device/facestation_f2","slug":"/device/facestation_f2/authentication","permalink":"/docs/es/device/facestation_f2/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"Autenticación","description":"Describe los métodos de autenticación compatibles y los procedimientos de autenticación.","keywords":["Modo de autenticación","Operación","PIN","Rostro","T&A (Tiempo y Asistencia)"],"isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"Usuario","permalink":"/docs/es/device/facestation_f2/user"},"next":{"title":"Ajustes","permalink":"/docs/es/device/facestation_f2/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/facestation_f2/authentication.mdx


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
  "value": "Coincidencia en el servidor",
  "id": "coincidencia-en-el-servidor",
  "level": 2
}, {
  "value": "Rostro",
  "id": "face",
  "level": 2
}, {
  "value": "Huella dactilar <Badge>FSF2-ODB</Badge>",
  "id": "fingerprint",
  "level": 2
}, {
  "value": "T&amp;A (Tiempo y Asistencia)",
  "id": "ta-tiempo-y-asistencia",
  "level": 2
}, {
  "value": "Opciones de visualización del resultado de autenticación",
  "id": "opciones-de-visualización-del-resultado-de-autenticación",
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
  }, {Badge, Cmd, Column, Columns, Image} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Describe los métodos de autenticación compatibles y los procedimientos de autenticación."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modo-de-autenticación",
      children: "Modo de autenticación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura el modo de autenticación. Utilice rostro, huella, PIN, tarjeta e ID en combinación como modos de autenticación y configure también el horario para cada modo."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La autenticación por huella solo está disponible en el producto FSF2-ODB."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registering-auth-mode",
      children: "Registrar modo de autenticación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add1.svg",
            ico: true,
            alone: true
          }), " y elija el método de autenticación que desea usar. Seleccione del mismo modo el método de autenticación adicional y combínelo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_203",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Combine los métodos de autenticación seleccionados para autenticar todos en orden o elija autenticar solo algunos de ellos. Por ejemplo, si se combinan como ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-card.png",
                  ico: true,
                  alone: true
                }), " + ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-face-bs3.png",
                  ico: true,
                  alone: true
                }), " + ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-pin-bs3.png",
                  ico: true,
                  alone: true
                }), ", deberá autenticar la tarjeta, rostro y PIN; cuando se combinan como ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-card.png",
                  ico: true,
                  alone: true
                }), " + ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-face-bs3.png",
                  ico: true,
                  alone: true
                }), " / ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-pin-bs3.png",
                  ico: true,
                  alone: true
                }), ", deberá autenticar la tarjeta y luego ingresar el rostro o el PIN."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_203",
                  product: "dev"
                }), " se puede configurar en BioStar X. Si no hay un horario configurado, solo se pueden seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_163",
                  product: "dev"
                }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_361",
                  product: "dev"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_203",
                  product: "dev"
                }), ", consulta la ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/settings-schedule",
                  children: "Guía del administrador de BioStar X"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modificar-modo-de-autenticación",
      children: "Modificar modo de autenticación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(Cmd, {
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
          children: ["Modifica el modo de autenticación consultando ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-auth-mode",
            children: "Registrar modo de autenticación"
          }), " y pulsa ", (0,jsx_runtime.jsx)(Cmd, {
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
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), " y selecciona el modo de autenticación que deseas eliminar. Es posible seleccionar varias opciones."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), ", luego ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " para eliminar el elemento seleccionado. Presiona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_321",
            product: "dev"
          }), " para volver a la pantalla anterior."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "coincidencia-en-el-servidor",
      children: "Coincidencia en el servidor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura la coincidencia con el servidor. El uso de la coincidencia en el servidor significa que la autenticación del usuario se realiza en BioStar X y no en el dispositivo. La coincidencia en el servidor puede ser útil cuando hay demasiada información de usuarios en el dispositivo o cuando se instala fuera de la puerta de entrada."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " y luego active ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_185",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Badge, {
                only: true,
                children: "FSF2-ODB"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_186",
                product: "dev"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Badge, {
                only: true,
                children: "FSF2-DB, FSF2-AB"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_187",
                product: "dev"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_185",
              product: "dev"
            }), " solo puede usar huella, tarjeta e ID."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si utilizas ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_185",
              product: "dev"
            }), ", debes habilitar la coincidencia en el servidor tanto en el dispositivo como en BioStar X. Para obtener más información sobre la configuración de coincidencia en el servidor de BioStar X, consulta la ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-server-server#servermatching",
              children: "Guía del administrador de BioStar X"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "face",
      children: "Rostro"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la configuración de la autenticación facial."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
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
          src: "/img/device/fsf2-auth.png",
          width: 300
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_308",
                product: "dev"
              }), ": Permite ajustar manualmente el brillo de la luz del dispositivo. Ajuste el brillo con ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_152",
                product: "dev"
              }), " o ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_107",
                product: "dev"
              }), " o seleccione ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_162",
                product: "dev"
              }), " para apagar la luz."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_140",
                product: "dev"
              }), ": Establece la sensibilidad para detectar movimiento alrededor del dispositivo. Cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_140",
                product: "dev"
              }), " está ajustado en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_091",
                product: "dev"
              }), ", toque la pantalla para autenticar el rostro."]
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
              }), ": Si la autenticación no se completa dentro del tiempo establecido, la autenticación falla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_117",
                product: "dev"
              }), ": Permite verificar rostros duplicados durante el registro de rostro."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_229",
                product: "dev"
              }), ": Defina la posición y el tamaño del área donde el dispositivo detecta rostros durante la autenticación facial."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para un rendimiento óptimo, se recomienda usar los valores predeterminados de las subopciones de ", (0,jsx_runtime.jsx)(Cmd, {
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
              }), ", podrá enrolar la ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_340",
                product: "dev"
              }), " emitida por BioStar X. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_340",
                product: "dev"
              }), " permite la autenticación biométrica sin almacenar datos de usuario en el servidor BioStar X, Airfob Portal o dispositivo, al guardar la plantilla biométrica del usuario en una tarjeta de acceso móvil."]
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
              }), ": Configure para almacenar tanto las imágenes reales como las plantillas en Visual Face, o para guardar solo las plantillas sin imágenes. Si se desactiva, se eliminarán todas las imágenes almacenadas de rostros visuales y los rostros visuales enrolados posteriormente almacenarán solo las plantillas, sin imágenes."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "Después de desactivar esta opción, utilice BioStar 2 v2.9.7 o superior."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_149",
                product: "dev"
              }), ": Configura el nivel de seguridad para la autenticación 1", ":N", "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_278",
                product: "dev"
              }), ": Configure el modo de funcionamiento del dispositivo para la autenticación facial."]
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
              }), ": Evite la autenticación de usuarios con rostros falsificados, como fotografías. Se activa cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_278",
                product: "dev"
              }), " está configurado en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_359",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_070",
                product: "dev"
              }), ": Permite cambiar ajustes avanzados de autenticación facial, como la detección de mascarilla y las funciones de la cámara térmica."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_368",
                    product: "dev"
                  }), ": Permite establecer el modo de confirmación según la finalidad."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_264",
                    product: "dev"
                  }), ": Permite definir el estado de notificación para fallos de autenticación debidos a la ausencia de mascarilla o a temperatura superior al estándar."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), ": Configure si se utiliza la detección de mascarillas."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        sid: "ui_165",
                        product: "dev"
                      }), ": Los usuarios sin mascarilla serán rechazados y el evento sin mascarilla se registrará en los registros."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        sid: "ui_164",
                        product: "dev"
                      }), ": Los usuarios sin mascarilla aún podrán autenticarse, pero se registrará un evento sin mascarilla."]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_236",
                product: "dev"
              }), ": Puede establecer si se utilizará la cámara térmica."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_165",
                    product: "dev"
                  }), ": Los usuarios con temperatura superior al rango estándar serán rechazados y el evento se registrará como temperatura superior al estándar."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_164",
                    product: "dev"
                  }), ": Los usuarios con temperatura superior al rango estándar aún podrán autenticarse, pero el evento se registrará como temperatura superior al estándar."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al usar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_123",
              product: "dev"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_236",
              product: "dev"
            }), ", configure ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_368",
              product: "dev"
            }), " según la finalidad del dispositivo."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_267",
                  product: "dev"
                }), ": Después de la autenticación, verifica si el usuario lleva mascarilla o mide la temperatura."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_369",
                  product: "dev"
                }), ": Después de comprobar si el usuario lleva mascarilla o de medir la temperatura, realiza la autenticación. Al usar este modo, los usuarios sin mascarilla o con temperatura superior al estándar no pueden autenticarse."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_370",
                  product: "dev"
                }), ": El dispositivo solo puede utilizarse para verificar si se lleva mascarilla o para medir la temperatura. Al usar este modo, los usuarios que lleven mascarilla o que estén por debajo de la temperatura estándar pueden ingresar independientemente de la autenticación."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_236",
              product: "dev"
            }), " se ajusta a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_161",
              product: "dev"
            }), ", se activan las opciones avanzadas de la cámara térmica."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_196",
                  product: "dev"
                }), ": Puede establecer la unidad de visualización de la temperatura."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_099",
                  product: "dev"
                }), ": Puede establecer la temperatura mínima de referencia para restringir el acceso. Los usuarios con temperatura superficial inferior a ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_099",
                  product: "dev"
                }), " serán rechazados. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_099",
                  product: "dev"
                }), " puede establecerse en un rango de 1℃~45℃ y no puede configurarse por encima de ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_106",
                  product: "dev"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_106",
                  product: "dev"
                }), ": Puede establecer la temperatura máxima de referencia para restringir el acceso. Los usuarios con temperatura superficial superior a ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_106",
                  product: "dev"
                }), " serán rechazados. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_106",
                  product: "dev"
                }), " puede establecerse en un rango de 1℃~45℃ y no puede configurarse por debajo de ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_099",
                  product: "dev"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_240",
                  product: "dev"
                }), ": Puede establecer si se guardará el registro de temperatura del usuario. Si utiliza esta opción, tanto el éxito de la autenticación como el valor de temperatura del usuario se guardarán en el registro; si no se utiliza, solo se registrará el éxito de la autenticación."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_235",
                  product: "dev"
                }), ": Establece si el video infrarrojo se muestra en la pantalla del dispositivo."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_114",
                  product: "dev"
                }), ": Configura el dispositivo para que detecte automáticamente la zona de interés (ROI) para medir la temperatura del usuario. Por ejemplo, si hay otras luces instaladas cerca, esta opción permite que la cámara térmica detecte y mida la temperatura del usuario en lugar de esa iluminación."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_331",
                  product: "dev"
                }), ": Establece opciones detalladas de la cámara para una medición precisa."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_236",
              product: "dev"
            }), " se ajusta a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_161",
              product: "dev"
            }), ", configura opciones detalladas de la cámara térmica para una medición precisa según el entorno de instalación."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_243",
                  product: "dev"
                }), ": Configure la distancia entre el usuario y la cámara térmica."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_296",
                  product: "dev"
                }), ": Configure la emisividad infrarroja."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_045",
                  product: "dev"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_046",
                  product: "dev"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_048",
                  product: "dev"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_047",
                  product: "dev"
                }), ": Permite configurar manualmente la ROI (región de interés) cuando ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_114",
                  product: "dev"
                }), " está ajustado a ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_162",
                  product: "dev"
                }), ". Ajuste la ubicación y el tamaño de la ROI para especificar el área donde la cámara térmica medirá la temperatura. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_045",
                  product: "dev"
                }), " indica las posiciones izquierda y derecha de la región de interés; cuanto mayor sea este valor, más se desplazará la región hacia la derecha de la pantalla. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_046",
                  product: "dev"
                }), " indica las posiciones superior e inferior de la región de interés; cuanto mayor sea este valor, más se desplazará la región hacia arriba. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_048",
                  product: "dev"
                }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_047",
                  product: "dev"
                }), " indican el tamaño de la región de interés; al aumentar ambos valores, el área para medir la temperatura se amplía. Por ejemplo, si los valores de ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_045",
                  product: "dev"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_046",
                  product: "dev"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_048",
                  product: "dev"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_047",
                  product: "dev"
                }), " se cambian de los valores predeterminados a 40, 15, 70 y 40 respectivamente, la región de interés cambiará como se muestra a continuación."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(Columns, {
            children: [(0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-roi1.png",
                width: 200,
                alone: true
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "Si la ROI está configurada con el valor predeterminado"
              })]
            }), (0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-roi2.png",
                width: 200,
                alone: true
              }), (0,jsx_runtime.jsxs)(_components.p, {
                children: ["ROI X(%), ROI Y(%), ancho de ROI (%), alto de ROI (%)", (0,jsx_runtime.jsx)("br", {}), "Cuando los valores se cambian a 40, 15, 70 y 40, respectivamente"]
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_241",
                  product: "dev"
                }), ": Configure la cámara termográfica para corregir la temperatura de forma autónoma, teniendo en cuenta el uso ambiental del dispositivo y la temperatura circundante."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_242",
                  product: "dev"
                }), ": Ajuste las mediciones de temperatura para que aumenten o disminuyan en un valor constante según el entorno de uso del producto. Por ejemplo, si la lectura de temperatura siempre se mide 0.1℃ más alta, establezca el valor de corrección de temperatura en -0.1."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_017",
                  product: "dev"
                }), ": Si la cámara termográfica está correctamente conectada, se mostrará la versión del firmware de dicha cámara."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para un rendimiento óptimo, se recomienda usar los valores predeterminados en las subopciones de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_331",
              product: "dev"
            }), ". Los valores predeterminados de cada opción son los siguientes:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_243",
                  product: "dev"
                }), ": 100"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_296",
                  product: "dev"
                }), ": 0.98"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_045",
                  product: "dev"
                }), ": 30"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_046",
                  product: "dev"
                }), ": 25"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_048",
                  product: "dev"
                }), ": 50"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_047",
                  product: "dev"
                }), ": 55"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Cuando use el ROI como configuración predeterminada, se mostrará una guía amarilla en el área de ROI de la pantalla durante la autenticación, como se muestra a continuación. Cuando el rostro del usuario esté alineado dentro de esa área durante la autenticación, se podrán realizar mediciones de temperatura precisas. Cuando cambie la configuración manualmente o use un ROI dinámico, la guía amarilla no se mostrará."
          }), "\n", (0,jsx_runtime.jsxs)(Columns, {
            children: [(0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-static-roi.png",
                width: 200
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "Si la ROI está configurada con el valor predeterminado"
              })]
            }), (0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-dynamic-roi.png",
                width: 200
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "Al cambiar la configuración de ROI o usar ROI dinámico"
              })]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las funciones de autenticación con mascarilla y de cámara termográfica no están disponibles en los dispositivos esclavos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La cámara termográfica es compatible con TCM10-FSF2."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "fingerprint",
      children: ["Huella dactilar ", (0,jsx_runtime.jsx)(Badge, {
        only: true,
        children: "FSF2-ODB"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambia los ajustes de autenticación por huella digital."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
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
              }), ": Configura el nivel de seguridad para la autenticación 1", ":N", "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_130",
                product: "dev"
              }), ": Establece el tiempo de espera para la coincidencia de huellas dactilares. Si la autenticación no se completa dentro del tiempo establecido, falla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_254",
                product: "dev"
              }), ": Muestra la imagen sin procesar al escanear una huella dactilar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_197",
                product: "dev"
              }), ": Establece la sensibilidad del sensor de huellas dactilares. Establece la sensibilidad más alta para obtener información de huella dactilar precisa."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_003",
                product: "dev"
              }), ": Establece el rendimiento de autenticación por huella dactilar. Al seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_275",
                product: "dev"
              }), ", la velocidad de autenticación se ajusta según el número total de plantillas de huellas dactilares registradas en el dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_342",
                product: "dev"
              }), ": Establece el formato de la plantilla de huella dactilar. El valor predeterminado es ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_057",
                product: "dev"
              }), ". Cambiar el formato de la plantilla bloquea el uso de todas las huellas dactilares almacenadas previamente, así que procede con precaución."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_198",
                product: "dev"
              }), ": Establece en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_277",
                product: "dev"
              }), " para encender el sensor de huellas dactilares cuando detecta el dedo del usuario. Establece en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_362",
                product: "dev"
              }), " para mantener el sensor siempre encendido, incluso cuando no se escanean huellas dactilares."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_249",
                product: "dev"
              }), ": Establece el nivel de detección de huellas dactilares falsas. Niveles más altos de detección de huellas falsas pueden aumentar las tasas de rechazo de las huellas reales."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_116",
                product: "dev"
              }), ": Inspecciona la calidad de la huella escaneada para guardar datos de alta calidad. Cuando está activado, el dispositivo notifica al usuario si la calidad de la huella es baja y le ayuda a escanear correctamente."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_118",
                product: "dev"
              }), ": Verifica huellas dactilares duplicadas durante el enrolamiento."]
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
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona ", (0,jsx_runtime.jsx)(Cmd, {
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
          src: "/img/device/auth-tna.png",
          width: 300
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), ": Configura cómo usar el modo de asistencia."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_086",
                product: "dev"
              }), ": Agrega eventos de asistencia. Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_086",
                product: "dev"
              }), " → ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), " para agregar un evento de tiempo y asistencia, luego configure el ícono que se mostrará, el nombre del evento y el horario."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_082",
                product: "dev"
              }), ": Exige a los usuarios seleccionar un evento de asistencia durante la autenticación. Disponible cuando ", (0,jsx_runtime.jsx)(Cmd, {
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
              }), ": Permite a los usuarios usar solo los eventos de asistencia seleccionados por el administrador. Disponible cuando ", (0,jsx_runtime.jsx)(Cmd, {
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
              }), ": Selecciona si usar códigos de trabajo."]
            }), "\n"]
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
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure los elementos deseados en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_259",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/auth-result-display-option.png",
          width: 300
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_169",
                product: "dev"
              }), ": Selecciona cómo aparece el ID de usuario en la pantalla de resultados de autenticación del dispositivo."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_307",
                    product: "dev"
                  }), ": Muestra el ID de usuario completo."]
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
              }), ": Seleccionar cómo aparece el nombre de usuario en la pantalla de resultados de autenticación del dispositivo."]
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