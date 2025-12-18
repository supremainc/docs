"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["23624"], {
44957: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_device_manager_xpd_2_settings_mdx_e46_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-device-manager-xpd-2-settings-mdx-e46.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_device_manager_xpd_2_settings_mdx_e46_namespaceObject = JSON.parse('{"id":"device/device_manager/xpd2-settings","title":"Configurar XPass D2","description":"Configura ajustes para aplicar a XPass D2 como plantilla y aplícalos directamente a dispositivos individuales.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/device_manager/xpd2-settings.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/xpd2-settings","permalink":"/docs/es/device/device_manager/xpd2-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/xpd2-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"xpd2-settings","title":"Configurar XPass D2","description":"Configura ajustes para aplicar a XPass D2 como plantilla y aplícalos directamente a dispositivos individuales.","keywords":["XPass D2","Plantilla","Búsqueda de dispositivos","Conexión de dispositivos","Actualización de firmware","Reiniciar dispositivo","Contraseña de administrador"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"Configurar dispositivo IP","permalink":"/docs/es/device/device_manager/ip-device-settings"},"next":{"title":"Apéndices","permalink":"/docs/es/device/device_manager/appendices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/device_manager/xpd2-settings.mdx


const frontMatter = {
	id: 'xpd2-settings',
	title: 'Configurar XPass D2',
	description: 'Configura ajustes para aplicar a XPass D2 como plantilla y aplícalos directamente a dispositivos individuales.',
	keywords: [
		'XPass D2',
		'Plantilla',
		'Búsqueda de dispositivos',
		'Conexión de dispositivos',
		'Actualización de firmware',
		'Reiniciar dispositivo',
		'Contraseña de administrador'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar plantilla",
  "id": "template-add",
  "level": 2
}, {
  "value": "Establecer nombre de plantilla y contraseña de administrador",
  "id": "establecer-nombre-de-plantilla-y-contraseña-de-administrador",
  "level": 3
}, {
  "value": "Interfaz",
  "id": "interfaz",
  "level": 3
}, {
  "value": "Autenticación",
  "id": "autenticación",
  "level": 3
}, {
  "value": "Formato Tarjeta Wiegand",
  "id": "formato-tarjeta-wiegand",
  "level": 3
}, {
  "value": "Diseño de Tarjeta Inteligente Suprema",
  "id": "diseño-de-tarjeta-inteligente-suprema",
  "level": 3
}, {
  "value": "Diseño de Tarjeta Inteligente Personalizada",
  "id": "diseño-de-tarjeta-inteligente-personalizada",
  "level": 3
}, {
  "value": "Configuración del teclado",
  "id": "configuración-del-teclado",
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
  "value": "Aplicar plantilla",
  "id": "aplicar-plantilla",
  "level": 2
}, {
  "value": "Gestionar plantillas",
  "id": "gestionar-plantillas",
  "level": 2
}, {
  "value": "Editar plantilla",
  "id": "editar-plantilla",
  "level": 3
}, {
  "value": "Eliminar plantilla",
  "id": "eliminar-plantilla",
  "level": 3
}, {
  "value": "Exportar plantilla",
  "id": "exportar-plantilla",
  "level": 3
}, {
  "value": "Importar plantilla",
  "id": "importar-plantilla",
  "level": 3
}, {
  "value": "Buscar y conectar dispositivo",
  "id": "device-search-connect",
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
  "value": "Cambiar contraseña de administrador",
  "id": "admin-password-change",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Configura ajustes para aplicar a XPass D2 como plantilla y aplícalos directamente a dispositivos individuales. Aplica los ajustes mucho más rápido que al acceder al programa de gestión en un PC o usar tarjetas de comando."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Es posible que ciertos ajustes no se apliquen si la versión del firmware del dispositivo es antigua. Consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "Actualizar el firmware del dispositivo"
        }), " para aplicar todos los ajustes."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-add",
      children: "Agregar plantilla"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura la comunicación RS-485, el formato de tarjeta, los ajustes del teclado, el PIN, el LED y el zumbador antes de agregarlos como plantilla. Agregar una plantilla permite aplicar ajustes de forma rápida y sencilla sin configurar cada dispositivo individual cada vez."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecuta Suprema Device Manager en el dispositivo móvil."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona XPass D2 en la pantalla principal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toca ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add.svg",
            ico: true,
            alone: true
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-add.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona el modelo de dispositivo para el que deseas crear la plantilla."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de configurar cada elemento, toca ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_295",
            product: "dev"
          }), " para guardar la plantilla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Se pueden agregar hasta 100 plantillas."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "establecer-nombre-de-plantilla-y-contraseña-de-administrador",
      children: "Establecer nombre de plantilla y contraseña de administrador"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-name-pw.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_341",
            product: "dev"
          }), ": Ingresa el nombre de plantilla deseado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_074",
            product: "dev"
          }), ": Ingresa la contraseña de administrador."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La contraseña de administrador puede tener de 6 a 32 dígitos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Ten cuidado de no perder la contraseña de administrador. Si pierdes la contraseña de administrador, será necesario inicializar el dispositivo para conectarte al dispositivo con la plantilla aplicada."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo cambiar la contraseña de administrador, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#admin-password-change",
              children: "Cambiar contraseña de administrador"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interfaz",
      children: "Interfaz"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-interface.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_038",
            product: "dev"
          }), ": Establece la dirección OSDP que se utilizará en la comunicación entre el dispositivo y el dispositivo maestro. Se puede configurar con números del 0 al 126."]
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
      id: "autenticación",
      children: "Autenticación"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-auth-cardtype.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_328",
            product: "dev"
          }), ": Configura el tipo de tarjeta que usará el dispositivo."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_008",
                product: "dev"
              }), ": Selecciona el tipo de tarjeta CSN y establece el orden de bytes."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_201",
                product: "dev"
              }), ": Selecciona los tipos de tarjetas inteligentes emitidas por Suprema."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_333",
                product: "dev"
              }), ": Selecciona los tipos de tarjetas inteligentes emitidas por terceros."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_139",
                product: "dev"
              }), ": Configura el tipo de tarjeta móvil."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Cuando se establece en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_034",
          product: "dev"
        }), ", los datos de la tarjeta se procesan de izquierda a derecha, procesando secuencialmente del byte más grande al más pequeño al guardar el número de serie de la tarjeta (CSN). ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_030",
          product: "dev"
        }), " procesa el número de serie de la tarjeta (CSN) del byte más pequeño al más grande al guardarlo."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formato-tarjeta-wiegand",
      children: "Formato Tarjeta Wiegand"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-wiegand-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_354",
            product: "dev"
          }), ": Establece el formato de tarjeta Wiegand que se especificará para el dispositivo. Los datos de la tarjeta se procesan según el formato establecido."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_179",
                product: "dev"
              }), ": Si el formato deseado no está disponible, toca ", (0,jsx_runtime.jsx)(IcAdd, {}), " para agregar un nuevo formato Wiegand."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/xpd2-template-wiegand-card-new.png",
              width: 250
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_253",
                    product: "dev"
                  }), ": Ingresa el nombre del formato Wiegand deseado."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_318",
                    product: "dev"
                  }), ": Ingresa el número total de bits."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_024",
                    product: "dev"
                  }), ": Ingresa los bits inicial y final del ID que deseas usar. Toca ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-add3.svg",
                    ico: true,
                    alone: true
                  }), " ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_319",
                    product: "dev"
                  }), " para agregar un campo de ID."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_350",
                    product: "dev"
                  }), ": Ingresa la posición del campo de paridad y los bits inicial y final que deseas usar. Toca ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-add3.svg",
                    ico: true,
                    alone: true
                  }), " ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_319",
                    product: "dev"
                  }), " para agregar un campo de paridad."]
                }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
                  type: "info",
                  children: (0,jsx_runtime.jsx)(_components.p, {
                    children: "Para agregar un campo de paridad, ingresa el número total de bits."
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_352",
            product: "dev"
          }), ": Configura el ancho de pulso de la señal Wiegand."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_351",
            product: "dev"
          }), ": Configura el intervalo de pulso de la señal Wiegand."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "diseño-de-tarjeta-inteligente-suprema",
      children: "Diseño de Tarjeta Inteligente Suprema"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-suprema-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_151",
            product: "dev"
          }), ": Define si se utilizará la clave de sitio auxiliar. Al establecer la clave de sitio auxiliar, se puede usar para la autenticación cuando la clave principal de la tarjeta no coincide."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_032",
            product: "dev"
          }), ": Configura tarjetas MIFARE."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": Configura el tipo de cifrado en Crypto-1 o AES-128."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": Clave que cifra la comunicación entre las tarjetas inteligentes y el dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": Úsala para autenticar cuando la clave principal de sitio de la tarjeta no coincide. El campo de clave de sitio auxiliar solo se muestra cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " del nivel anterior está activado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_214",
                product: "dev"
              }), ": Selecciona el bloque inicial donde se almacenará cada plantilla. Este bloque es el índice del bloque donde se almacena la información del usuario; configúrelo en un bloque almacenable si el usuario ya usa la tarjeta inteligente. Solo se puede configurar para MIFARE."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_010",
            product: "dev"
          }), ": Configura tarjetas DESFire."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_011",
                product: "dev"
              }), ": Utiliza tarjetas DESFire emitidas por terceros. Solo se puede configurar DESCire."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": Clave que cifra la comunicación entre las tarjetas inteligentes y el dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": Úsala para autenticar cuando la clave principal de sitio de la tarjeta no coincide. El campo de clave de sitio auxiliar solo se muestra cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " del nivel anterior está activado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_223",
                product: "dev"
              }), ": Establece el ID de aplicación. Funciona como una especie de directorio que incluye un ID de archivo. Solo se puede configurar DESCire."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_347",
                product: "dev"
              }), ": Establece el ID de archivo. Solo se puede configurar DESCire."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": Configura el tipo de cifrado en DES/3DES o AES."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_202",
            product: "dev"
          }), ": Configure el orden de bytes para la salida de tarjeta inteligente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Ingrese correctamente la información de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_225",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_349",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_223",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_347",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_222",
              product: "dev"
            }), " para utilizar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_011",
              product: "dev"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), " solo aceptan hasta 32 bytes en hexadecimal."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando se establece en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_034",
              product: "dev"
            }), ", los datos de la tarjeta se procesan de izquierda a derecha, procesando secuencialmente del byte más grande al más pequeño al guardar el número de serie de la tarjeta (CSN). ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_030",
              product: "dev"
            }), " procesa el número de serie de la tarjeta (CSN) del byte más pequeño al más grande al guardarlo."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "diseño-de-tarjeta-inteligente-personalizada",
      children: "Diseño de Tarjeta Inteligente Personalizada"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-custom-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_151",
            product: "dev"
          }), ": Define si se utilizará la clave de sitio auxiliar. Al establecer la clave de sitio auxiliar, se puede usar para la autenticación cuando la clave principal de la tarjeta no coincide."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_032",
            product: "dev"
          }), ": Configura tarjetas MIFARE."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": Configura el tipo de cifrado en Crypto-1 o AES-128."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": Clave que cifra la comunicación entre las tarjetas inteligentes y el dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": Úsala para autenticar cuando la clave principal de sitio de la tarjeta no coincide. El campo de clave de sitio auxiliar solo se muestra cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " del nivel anterior está activado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_154",
                product: "dev"
              }), ": Seleccione el bloque inicial donde se almacenará cada plantilla. Este bloque es el índice del bloque donde se almacena la información del usuario; configúrelo en un bloque almacenable si el usuario ya usa la tarjeta inteligente. Solo se puede configurar para MIFARE."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_145",
                product: "dev"
              }), ": Configure el punto de inicio para leer el número de tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_110",
                product: "dev"
              }), ": Configure el tamaño de los datos que se leerán de la tarjeta (si los valores establecidos de ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " son iguales a los de la tarjeta)."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_010",
            product: "dev"
          }), ": Configura tarjetas DESFire."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_011",
                product: "dev"
              }), ": Utiliza tarjetas DESFire emitidas por terceros. Solo se puede configurar DESCire."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": Clave que cifra la comunicación entre las tarjetas inteligentes y el dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": Úsala para autenticar cuando la clave principal de sitio de la tarjeta no coincide. El campo de clave de sitio auxiliar solo se muestra cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " del nivel anterior está activado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_223",
                product: "dev"
              }), ": Establece el ID de aplicación. Funciona como una especie de directorio que incluye un ID de archivo. Solo se puede configurar DESCire."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_347",
                product: "dev"
              }), ": Establece el ID de archivo. Solo se puede configurar DESCire."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": Configura el tipo de cifrado en DES/3DES o AES."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_145",
                product: "dev"
              }), ": Configure el punto de inicio para leer el número de tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_110",
                product: "dev"
              }), ": Configure el tamaño de los datos que se leerán de la tarjeta (si los valores establecidos de ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " son iguales a los de la tarjeta)."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_146",
            product: "dev"
          }), ": Configure el orden de bytes para la salida de tarjeta inteligente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Ingrese correctamente la información de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_225",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_349",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_223",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_347",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_222",
              product: "dev"
            }), " para utilizar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_011",
              product: "dev"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), " solo aceptan hasta 32 bytes en hexadecimal."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando se establece en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_034",
              product: "dev"
            }), ", los datos de la tarjeta se procesan de izquierda a derecha, procesando secuencialmente del byte más grande al más pequeño al guardar el número de serie de la tarjeta (CSN). ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_030",
              product: "dev"
            }), " procesa el número de serie de la tarjeta (CSN) del byte más pequeño al más grande al guardarlo."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuración-del-teclado",
      children: "Configuración del teclado"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-keypad.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_335",
            product: "dev"
          }), ": Configure si se utilizará el teclado. Cuando el teclado está activado, autentíquese ingresando el ID de la tarjeta con el teclado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_219",
            product: "dev"
          }), ": Envía el valor cada vez que se presiona una tecla al ingresar el ID de la tarjeta en el teclado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_306",
            product: "dev"
          }), ": Al ingresar el ID de la tarjeta en el teclado, presione todas las teclas necesarias y luego presione la tecla ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#"
          }), " para enviar todo el valor de una vez."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_327",
            product: "dev"
          }), ": Cuando el modo de autenticación del dispositivo está configurado en tarjeta + PIN, al presentar la tarjeta se activa el LED para solicitar al usuario que ingrese el PIN."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_147",
            product: "dev"
          }), ": Encienda o apague la retroiluminación del teclado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_336",
              product: "dev"
            }), " solo se muestra en la pantalla de configuración de plantillas del dispositivo XPD2-GKDB."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_147",
              product: "dev"
            }), " solo es compatible con el hardware XPD2-GKDB V02M y la versión de firmware v1.7.1 o superior."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los valores ingresados mediante el teclado se transmiten en unidades de 4 bits de forma predeterminada. Los ID de tarjetas ingresados mediante el teclado se envían en el mismo formato que el formato de tarjeta Wiegand."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "otros",
      children: "Otros"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-others.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_150",
          product: "dev"
        }), ": Configure para que, cuando se produzca un evento de manipulación en el dispositivo, la clave de seguridad almacenada en el dispositivo se elimine. Active la función de manipulación de seguridad para utilizarla."]
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
      id: "aplicar-plantilla",
      children: "Aplicar plantilla"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Las plantillas añadidas pueden aplicarse de manera uniforme a varios dispositivos mediante comunicación BLE."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Es posible que ciertos ajustes no se apliquen si la versión del firmware del dispositivo es antigua. Consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "Actualizar el firmware del dispositivo"
        }), " para aplicar todos los ajustes."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Active el Bluetooth en su dispositivo móvil y ejecute Suprema Device Manager."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona XPass D2 en la pantalla principal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_343",
            product: "dev"
          }), ". Aparecerá una lista de plantillas disponibles."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-choose-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione la plantilla deseada de la lista de plantillas."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_212",
            product: "dev"
          }), " para continuar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-choose-select-start.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Asegúrese de que la parte posterior de su dispositivo móvil toque el dispositivo al que desea aplicar la plantilla."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez completada la aplicación de la plantilla, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los ajustes modificados mediante Suprema Device Manager solo se aplican al dispositivo y no se sincronizarán con el servidor."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si el dispositivo está conectado al dispositivo maestro o si la configuración de salida Wiegand ha cambiado, no se puede conectar a Suprema Device Manager con la clave principal. Inicialice el dispositivo para conectarlo con Suprema Device Manager."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gestionar-plantillas",
      children: "Gestionar plantillas"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "editar-plantilla",
      children: "Editar plantilla"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecuta Suprema Device Manager en el dispositivo móvil."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona XPass D2 en la pantalla principal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione la plantilla que desea editar de la lista de plantillas."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#template-add",
            children: "Agregar plantilla"
          }), " para editar la plantilla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para guardar los ajustes modificados, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_295",
            product: "dev"
          }), "; para guardarlos como una nueva plantilla, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_178",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eliminar-plantilla",
      children: "Eliminar plantilla"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecuta Suprema Device Manager en el dispositivo móvil."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona XPass D2 en la pantalla principal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione la plantilla que desea eliminar de la lista de plantillas."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " para eliminar una plantilla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select-del.png",
          width: 250
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exportar-plantilla",
      children: "Exportar plantilla"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exporte plantillas para la configuración de XPass D2 desde la aplicación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecuta Suprema Device Manager en el dispositivo móvil."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona XPass D2 en la pantalla principal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-export1.png",
          className: "none",
          width: 840
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la parte superior de la lista de plantillas, toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_339",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de seleccionar la plantilla para exportar, toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-check.svg",
            ico: true,
            alone: true
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-export2.png",
          width: 250
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Las plantillas se guardarán en la carpeta ", (0,jsx_runtime.jsx)(_components.em, {
          children: "DeviceManager_TemplateFiles"
        }), " creada en la misma ubicación que el archivo de instalación de la aplicación Suprema Device Manager."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importar-plantilla",
      children: "Importar plantilla"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Importe plantillas para la configuración de XPass D2 en la aplicación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecuta Suprema Device Manager en el dispositivo móvil."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona XPass D2 en la pantalla principal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-import.png",
          className: "none",
          width: 840
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la parte superior de la lista de plantillas, toque ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_337",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione la plantilla que desea importar de la carpeta donde se almacenan las plantillas."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Las plantillas se guardarán en la carpeta ", (0,jsx_runtime.jsx)(_components.em, {
          children: "DeviceManager_TemplateFiles"
        }), " creada en la misma ubicación que el archivo de instalación de la aplicación Suprema Device Manager."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-search-connect",
      children: "Buscar y conectar dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Busque y conéctese a los XPass D2 instalados cercanos. Conéctese a Suprema Device Manager para actualizar el firmware del dispositivo o utilizar funciones como reiniciar el dispositivo o cambiar la contraseña de la plantilla."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Active el Bluetooth en su dispositivo móvil y ejecute Suprema Device Manager."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona XPass D2 en la pantalla principal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_285",
            product: "dev"
          }), ". Aparecerá una lista de dispositivos conectables."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-search-device-select.png",
          className: "none",
          width: 540
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
            href: "#device-search-connect",
            children: "Buscar y conectar un dispositivo"
          }), " para conectar el dispositivo al que desea actualizar el firmware."]
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
          src: "/img/device/xpd2-template-management-fwupgrade.png",
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
            href: "#device-search-connect",
            children: "Buscar y conectar un dispositivo"
          }), " para conectar el dispositivo que desea reiniciar."]
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
          src: "/img/device/xpd2-template-management-restart.png",
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
      id: "admin-password-change",
      children: "Cambiar contraseña de administrador"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la contraseña de administrador de la plantilla."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#device-search-connect",
            children: "Buscar y conectar un dispositivo"
          }), " para conectar el dispositivo con la plantilla en la que desea cambiar la contraseña."]
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
          src: "/img/device/xpd2-template-management-password.png",
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
            children: "La contraseña de administrador puede tener de 6 a 32 dígitos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Ten cuidado de no perder la contraseña de administrador. Si pierdes la contraseña de administrador, será necesario inicializar el dispositivo para conectarte al dispositivo con la plantilla aplicada."
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