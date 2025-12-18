"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["18371"], {
29896: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biostation_3_authentication_mdx_116_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-biostation-3-authentication-mdx-116.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biostation_3_authentication_mdx_116_namespaceObject = JSON.parse('{"id":"device/biostation_3/authentication","title":"Autenticación","description":"Describe los métodos de autenticación compatibles y los procedimientos de autenticación.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/biostation_3/authentication.mdx","sourceDirName":"device/biostation_3","slug":"/device/biostation_3/authentication","permalink":"/docs/es/device/biostation_3/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"Autenticación","description":"Describe los métodos de autenticación compatibles y los procedimientos de autenticación.","keywords":["Modo de autenticación","Operación","PIN","Rostro","T&A (Tiempo y Asistencia)"],"isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"Usuario","permalink":"/docs/es/device/biostation_3/user"},"next":{"title":"Ajustes","permalink":"/docs/es/device/biostation_3/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/biostation_3/authentication.mdx


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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Describe los métodos de autenticación compatibles y los procedimientos de autenticación."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modo-de-autenticación",
      children: "Modo de autenticación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configura el modo de autenticación. Utilice ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_228",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_040",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_323",
        product: "dev"
      }), " y ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_020",
        product: "dev"
      }), " en combinación como modos de autenticación y configure el horario para cada modo de autenticación."]
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
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add.svg",
            ico: true,
            alone: true
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al pulsar ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add1.svg",
            ico: true,
            alone: true
          }), ", aparecerá en la pantalla la credencial que se puede añadir. Selecciona las credenciales que deseas añadir. Pulsa ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-cancel.svg",
            ico: true,
            alone: true
          }), " mientras la credencial esté añadida para eliminarla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3-authmode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de configurar el modo de autenticación deseado, configura ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_203",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)("div", {
          className: "overflow-x",
          children: (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "Categoría"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Descripción"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "Rostro"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["* ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), ": Este modo utiliza únicamente autenticación facial.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": Este modo requiere autenticación facial seguida de la introducción de un PIN."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "Tarjeta / Código QR"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), ": Este modo utiliza solo la autenticación por tarjeta / código QR.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), ": Este modo requiere autenticación con tarjeta / código QR seguida de autenticación facial.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": Este modo requiere autenticación mediante tarjeta / código QR seguida de ingreso de PIN.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
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
                  }), ": Este modo requiere autenticación con tarjeta / código QR seguida de autenticación facial o introducción de PIN.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
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
                  }), ": Este modo utiliza autenticación facial y PIN después de la autenticación con tarjeta / código QR."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "ID"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["* ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), ": Este modo requiere la introducción de ID seguida de autenticación facial.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": Este modo requiere ingresar un ID seguido de ingreso de PIN.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs3.png",
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
                  }), ": Este modo requiere la introducción de ID seguida de autenticación facial o introducción de PIN.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs3.png",
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
                  }), ": Este modo utiliza autenticación facial y PIN después de la introducción de ID."]
                })]
              })]
            })]
          })
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
                }), ", consulta la ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/settings-schedule",
                  children: "Guía del administrador de BioStar X"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_256",
                  product: "dev"
                }), " y active ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_265",
                  product: "dev"
                }), " con ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_041",
                  product: "dev"
                }), " para usar la autenticación ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_042",
                  product: "dev"
                }), "; se requiere una licencia de dispositivo independiente. Para obtener más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings#license",
                  children: "Licencia"
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
          children: ["Pulsa ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), " para eliminar el elemento seleccionado."]
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
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de pulsar ", (0,jsx_runtime.jsx)(Cmd, {
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
          src: "/img/device/bs3-auth-option.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_187",
              product: "dev"
            }), ": Cuando se establece la coincidencia en el servidor, BioStar X realiza la autenticación del usuario sin que el dispositivo la realice. Se puede usar cuando el dispositivo tiene demasiada información de usuarios o cuando el dispositivo está instalado en exteriores."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_185",
                  product: "dev"
                }), " solo puede usar tarjetas e ID."]
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
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de pulsar ", (0,jsx_runtime.jsx)(Cmd, {
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
          src: "/img/device/bs3-auth-option-qr.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_041",
                product: "dev"
              }), ": Configure si se utiliza la autenticación por código QR a través de la cámara del dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_329",
                product: "dev"
              }), ": Configura la autenticación con un código QR que contenga los mismos datos que la tarjeta CSN o tarjeta Wiegand emitida al usuario. Solo se puede configurar cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_041",
                product: "dev"
              }), " está activado."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Se requiere una licencia de dispositivo independiente para usar ", (0,jsx_runtime.jsx)(Cmd, {
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
          children: ["Presione ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentíquese con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de pulsar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", establece si se usa ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_040",
            product: "dev"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_204",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3-pin.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_204",
              product: "dev"
            }), ": Las posiciones de las teclas numéricas pueden mezclarse aleatoriamente al ingresar una contraseña para evitar filtraciones."]
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
          children: ["Después de pulsar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", cambia los elementos deseados en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_259",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3-auth-result-display-option.png"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rostro",
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
          src: "/img/device/bs3-auth.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
              }), ": Cambie las configuraciones avanzadas para la autenticación facial, como la detección de mascarillas."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), ": Configure si se utiliza la detección de mascarillas."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_067",
                    product: "dev"
                  }), ": Defina el método para comprobar si se lleva mascarilla. Se activa cuando ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), " está configurado en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_161",
                    product: "dev"
                  }), "."]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_127",
                      product: "dev"
                    }), ": Los usuarios sin mascarilla serán rechazados y se registrarán los eventos de ausencia de mascarilla."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_126",
                      product: "dev"
                    }), ": Los usuarios sin mascarilla podrán autenticarse, pero los eventos de ausencia de mascarilla se registrarán."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_125",
                      product: "dev"
                    }), ": Solo los usuarios sin mascarilla pueden autenticarse y, si se usa este modo, el modo de verificación de mascarilla quedará fijo en ", (0,jsx_runtime.jsx)(Cmd, {
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
              }), ": Establece la sensibilidad para detectar el uso de mascarilla. Se activa cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_123",
                product: "dev"
              }), " está configurado en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_161",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_368",
                product: "dev"
              }), ": Configura el modo de confirmación según el propósito del dispositivo."]
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
                    }), ": El dispositivo solo se puede usar para comprobar si se lleva mascarilla. Cuando este modo está activado, cualquier usuario que lleve mascarilla puede acceder independientemente de la autenticación."]
                  }), "\n"]
                }), "\n"]
              })
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
          src: "/img/device/bs3-auth2.png"
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
              }), ": Agrega eventos de asistencia. Selecciona ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_086",
                product: "dev"
              }), " → ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add.svg",
                ico: true,
                alone: true
              }), " para registrar eventos de asistencia y luego configura el icono que se mostrará en la pantalla, ", (0,jsx_runtime.jsx)(Cmd, {
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