"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["79362"], {
2654: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_credential_smart_format_frontMatter),
  toc: () => (/* binding */ settings_credential_smart_format_toc),
  "default": () => (/* binding */ settings_credential_smart_format_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_smart_format_mdx_313_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_credential_smart_format_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-credential-smart-format-mdx-313.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_smart_format_mdx_313_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-smart-format","title":"Configurar Formato De Tarjeta Inteligente","description":"Configura el diseño de tarjetas inteligentes como MIFARE, iCLASS, DESFire e iCLASS Seos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-smart-format.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-smart-format","permalink":"/docs/es/platform/biostar_x/settings-credential-smart-format","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-smart-format.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-smart-format","title":"Configurar Formato De Tarjeta Inteligente","description":"Configura el diseño de tarjetas inteligentes como MIFARE, iCLASS, DESFire e iCLASS Seos.","keywords":["Tarjeta Inteligente","Formato de tarjeta","Ajustes"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar formato de tarjeta Wiegand","permalink":"/docs/es/platform/biostar_x/settings-credential-wiegand-format"},"next":{"title":"Administrar tarjetas de acceso móvil","permalink":"/docs/es/platform/biostar_x/settings-credential-mobile-access-card"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_smart-cardtype.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Include} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,custom-mifare",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.encryptionType",
            product: "2"
          }), ": Configure el tipo de cifrado en ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SL1"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SL3"
          }), "."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "desfire,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.format.desfireAvd",
            product: "2"
          }), ": Utilice tarjetas DESFire emitidas por terceros. Solo se puede configurar DESCire."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,custom-mifare,iclass,desfire,custom-desfire,iclassseos",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), ": Clave que cifra las comunicaciones entre la tarjeta inteligente y el lector de tarjetas."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), ": Se usa para la autenticación cuando la clave de sitio primaria de la tarjeta no coincide. La clave de sitio secundaria solo se puede ingresar después de activar la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), " en la parte superior de la sección."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,iclass",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.startBlockIndex",
            product: "2"
          }), ": Seleccione el bloque inicial donde se guardará cada plantilla. Este bloque es el índice del bloque donde se almacena la información del usuario; configúrelo en un bloque almacenable si el usuario ya usa la tarjeta inteligente."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "custom-mifare,custom-iclass",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.blockIndex",
            product: "2"
          }), ": Seleccione el bloque inicial donde se guardará cada plantilla. Este bloque es el índice del bloque donde se almacena la información del usuario; configúrelo en un bloque almacenable si el usuario ya usa la tarjeta inteligente."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "desfire,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.idField",
              product: "2"
            }), ": Configure para leer un área específica de la tarjeta. Funciona como un directorio que contiene ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.fileId",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.fileId",
              product: "2"
            }), ": Configure el ID de archivo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.encryptionType",
              product: "2"
            }), ": Configure el tipo de cifrado en ", (0,jsx_runtime.jsx)(Cmd, {
              children: "DES/3DES"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              children: "AES"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "custom-mifare,custom-iclass,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.skipBytes",
              product: "2"
            }), ": Configure el punto de inicio para leer el número de tarjeta."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.dataSize",
              product: "2"
            }), ": (Cuando los valores configurados de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), " coinciden con la configuración de la tarjeta) Configure el tamaño de los datos de la tarjeta que se leerán."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "iclassseos",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.ADF",
            product: "2"
          }), ": Dirección ADF donde se almacenan las credenciales digitales."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "felica",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.systemCode",
              product: "2"
            }), ": Ingrese el código de sistema para leer tarjetas FeliCa en hexadecimal, con un máximo de 4 caracteres."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.serviceCode",
              product: "2"
            }), ": Ingrese el código de servicio para leer tarjetas FeliCa en hexadecimal, con un máximo de 4 caracteres."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.idField",
              product: "2"
            }), ": Configure para leer un área determinada de la tarjeta. Configure hasta 8 bloques para lectura haciendo clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.addplus",
              product: "2"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.blockNumber",
              product: "2"
            }), ": Configure el bloque que se leerá de la tarjeta. (0-150)"]
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


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-smart-format.mdx


const settings_credential_smart_format_frontMatter = {
	id: 'settings-credential-smart-format',
	title: 'Configurar Formato De Tarjeta Inteligente',
	description: 'Configura el diseño de tarjetas inteligentes como MIFARE, iCLASS, DESFire e iCLASS Seos.',
	keywords: [
		'Tarjeta Inteligente',
		'Formato de tarjeta',
		'Ajustes'
	],
	isTranslationMissing: false
};
const settings_credential_smart_format_contentTitle = undefined;

const assets = {

};




const settings_credential_smart_format_toc = [{
  "value": "Agregar tarjeta inteligente",
  "id": "addSmartformat",
  "level": 2
}, {
  "value": "Tipos de tarjeta inteligente",
  "id": "smartCardType",
  "level": 2
}, {
  "value": "Guía de opciones de configuración",
  "id": "setting",
  "level": 2
}, {
  "value": "Configurar información básica",
  "id": "configurar-información-básica",
  "level": 3
}, {
  "value": "Configurar tarjeta inteligente",
  "id": "configurar-tarjeta-inteligente",
  "level": 3
}, {
  "value": "Tarjeta inteligente Suprema",
  "id": "tarjeta-inteligente-suprema",
  "level": 4
}, ...toc, ...toc, ...toc, ...toc, {
  "value": "Diseño",
  "id": "layout",
  "level": 5
}, {
  "value": "Tarjeta inteligente personalizada",
  "id": "tarjeta-inteligente-personalizada",
  "level": 4
}, ...toc, ...toc, ...toc];
function settings_credential_smart_format_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) settings_credential_smart_format_missingMdxReference("Cmd", true);
  if (!Details) settings_credential_smart_format_missingMdxReference("Details", true);
  if (!Image) settings_credential_smart_format_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Configura el diseño de tarjetas inteligentes como MIFARE, iCLASS, DESFire e iCLASS Seos."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addSmartformat",
      children: "Agregar tarjeta inteligente"
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
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.cardFormat"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.smartCard",
            product: "2"
          }), " en la lista de formatos de tarjeta de la izquierda."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-smart.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addSmartCard",
            product: "2"
          }), " en la parte superior izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.addNewSmartCard",
            product: "2"
          }), ", configura cada elemento. Para obtener más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#smartCardType",
            children: "lo siguiente"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-smart-format-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez que completes todos los ajustes, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "smartCardType",
      children: "Tipos de tarjeta inteligente"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define el tipo de tarjeta inteligente deseado en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.smartCardType",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.supremaSmartCard",
          product: "2"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-smart-format-type.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.customSmartCard",
          product: "2"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-custom-smart-format-type.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las tarjetas inteligentes personalizadas solo admiten MIFARE, DESFire y FeliCa."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FeliCa solo se admite en el firmware BioStation 3 versión 1.3.0 o superior."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "Guía de opciones de configuración"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configura el diseño de la tarjeta en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.info",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-smart-format-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los campos ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), " admiten solo hexadecimal. Ingresa los valores de la clave en el campo derecho y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.convertToHex",
              product: "2"
            }), ". Usa el valor convertido como clave del sitio."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.convertToHex",
              product: "2"
            }), " está disponible solo cuando la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.smartCardType",
              product: "2"
            }), " es ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.supremaSmartCard",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-información-básica",
      children: "Configurar información básica"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": Ingresa el nombre de la tarjeta inteligente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.secondaryKey",
            product: "2"
          }), ": Configura si se usará una clave secundaria del sitio. Establécelo en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.active",
            product: "2"
          }), " para habilitar la configuración de la clave secundaria del sitio. Cuando se configura una clave secundaria del sitio, se utilizará para la autenticación cuando la clave primaria de la tarjeta no coincida."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credential-cart-secondary-key.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-tarjeta-inteligente",
      children: "Configurar tarjeta inteligente"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura la estructura de la tarjeta inteligente."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tarjeta-inteligente-suprema",
      children: "Tarjeta inteligente Suprema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los campos ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.primaryKey",
        product: "2"
      }), " y ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.secondaryKey",
        product: "2"
      }), " admiten solo hexadecimal. Ingresa el valor de la clave en cada campo y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.convertToHex",
        product: "2"
      }), ". Usa el valor convertido como clave del sitio."]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "MIFARE"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-mifare.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "mifare"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "iCLASS"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-iclass.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "iclass"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "DESFire"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-desfire.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "desfire"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "iClass Seos"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-iclassseos.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "iclassseos"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "layout",
      children: "Diseño"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modifica el diseño que registra la información del usuario, facial y de huellas digitales."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.numberOfTemplate",
            product: "2"
          }), ": Establece el número de plantillas de huellas digitales que se incluirán en el diseño."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.templateSize",
            product: "2"
          }), ": Define la cantidad de bytes que usa cada plantilla de huellas digitales."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.useFace",
            product: "2"
          }), ": Elige si se usará la plantilla facial."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.faceTemplateSize",
            product: "2"
          }), ": Establece la cantidad de bytes que usa la plantilla facial."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.cardFormat.useFace",
          product: "2"
        }), " está disponible en los modelos FaceStation F2, BioStation 3 y BioEntry W3."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tarjeta-inteligente-personalizada",
      children: "Tarjeta inteligente personalizada"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Las tarjetas inteligentes personalizadas solo admiten MIFARE, DESFire y FeliCa."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "FeliCa solo se admite en el firmware BioStation 3 versión 1.3.0 o superior."
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "MIFARE"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-mifare.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "custom-mifare"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "DesFire"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-desfire.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "custom-desfire"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "Felica"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-felica.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "felica"
      })]
    })]
  });
}
function settings_credential_smart_format_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(settings_credential_smart_format_createMdxContent, {
      ...props
    })
  }) : settings_credential_smart_format_createMdxContent(props);
}
function settings_credential_smart_format_missingMdxReference(id, component) {
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