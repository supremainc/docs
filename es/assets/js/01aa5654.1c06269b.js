"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["78899"], {
23326: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_suprema_pass_app_advanced_features_mdx_01a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-suprema-pass-app-advanced-features-mdx-01a.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_suprema_pass_app_advanced_features_mdx_01a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/suprema-pass-app-advanced-features","title":"Configurar funciones avanzadas","description":"Esta guía explica cómo configurar los modos de autenticación por Bluetooth y NFC, habilitar la autenticación de dos factores con PIN o autenticación biométrica, revisar los registros de acceso y utilizar las opciones de soporte en la app Suprema Pass.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/suprema-pass-app-advanced-features.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/suprema-pass-app-advanced-features","permalink":"/docs/es/platform/biostar_air/suprema-pass-app-advanced-features","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/suprema-pass-app-advanced-features.mdx","tags":[],"version":"current","frontMatter":{"id":"suprema-pass-app-advanced-features","title":"Configurar funciones avanzadas","description":"Esta guía explica cómo configurar los modos de autenticación por Bluetooth y NFC, habilitar la autenticación de dos factores con PIN o autenticación biométrica, revisar los registros de acceso y utilizar las opciones de soporte en la app Suprema Pass.","keywords":["Funciones Avanzadas","Suprema Pass app","autenticación de dos factores","registros de acceso","opciones de soporte"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Uso de credenciales móviles","permalink":"/docs/es/platform/biostar_air/opening-doors-with-mobile-credentials"},"next":{"title":"Ajustar la sensibilidad Bluetooth","permalink":"/docs/es/platform/biostar_air/suprema-pass-app-sensitivity-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/suprema-pass-app-advanced-features.mdx


const frontMatter = {
	id: 'suprema-pass-app-advanced-features',
	title: 'Configurar funciones avanzadas',
	description: 'Esta guía explica cómo configurar los modos de autenticación por Bluetooth y NFC, habilitar la autenticación de dos factores con PIN o autenticación biométrica, revisar los registros de acceso y utilizar las opciones de soporte en la app Suprema Pass.',
	keywords: [
		'Funciones Avanzadas',
		'Suprema Pass app',
		'autenticación de dos factores',
		'registros de acceso',
		'opciones de soporte'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configurar método de conexión",
  "id": "connectingSetting",
  "level": 2
}, {
  "value": "Bluetooth",
  "id": "bluetooth",
  "level": 3
}, {
  "value": "NFC",
  "id": "nfc",
  "level": 3
}, {
  "value": "Autenticación de dos factores (2FA)",
  "id": "twoFactorAuth",
  "level": 2
}, {
  "value": "usuarios de iOS",
  "id": "ios",
  "level": 3
}, {
  "value": "Usuarios Android",
  "id": "android",
  "level": 3
}, {
  "value": "Registros de acceso",
  "id": "accesslogs",
  "level": 2
}, {
  "value": "Centro de soporte",
  "id": "supportCenter",
  "level": 2
}, {
  "value": "Configuración Avanzada",
  "id": "configuración-avanzada",
  "level": 2
}, {
  "value": "Funciones adicionales",
  "id": "additionalFeatures",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
  }, {Cmd, DocLink, IcHamberg, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "La app Suprema Pass incluye ajustes avanzados y opciones de seguridad para mejorar la experiencia del usuario y las funciones de control de acceso. Los usuarios pueden configurar los métodos de autenticación, habilitar la autenticación de dos factores, revisar los registros de acceso, reportar problemas y usar las opciones de soporte."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connectingSetting",
      children: "Configurar método de conexión"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Seleccione un método de conexión preferido para comunicarse con el dispositivo de control de acceso. En la pantalla principal de la app Suprema Pass, toque ", (0,jsx_runtime.jsx)(IcHamberg, {
        title: "Hamburger menu"
      }), " en la esquina superior derecha, luego seleccione el modo deseado en ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Método de conexión"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-connection-mode.png",
      width: "50%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bluetooth",
      children: "Bluetooth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elija entre dos modos de autenticación por Bluetooth."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Solo mientras la app esté en pantalla"
          }), ": autenticar con la tarjeta móvil únicamente cuando la app esté abierta en el dispositivo. Este modo ahorra batería, pero requiere abrir la app manualmente antes de acercarse a la puerta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Modo en segundo plano"
          }), ": autenticar con la tarjeta móvil incluso si la pantalla del dispositivo está apagada cuando la app se ejecuta en segundo plano. Este modo es más cómodo pero consume más batería. Si la app se cierra, vuelva a abrirla para reanudar las funciones en segundo plano."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nfc",
      children: "NFC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La autenticación por NFC está disponible solo en dispositivos Android. Utilice NFC solo o junto con Bluetooth para un acceso más rápido."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Los usuarios de Android con un dispositivo compatible con NFC pueden usar NFC junto con Bluetooth."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "twoFactorAuth",
      children: "Autenticación de dos factores (2FA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Habilite la autenticación de dos factores con un ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PIN, un patrón o autenticación biométrica"
      }), " (reconocimiento facial o huella dactilar) para mayor seguridad."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-twofactor.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Esta función no es compatible con las conexiones en ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Modo en segundo plano"
            }), " porque la pantalla de la app debe permanecer abierta durante la autenticación de acceso."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si se olvida el PIN o el patrón, reinstale la app y reactive la tarjeta móvil."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las funciones compatibles pueden variar según el dispositivo móvil."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ios",
      children: "usuarios de iOS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pantalla principal de la app Suprema Pass, toque ", (0,jsx_runtime.jsx)(IcHamberg, {
            title: "Hamburger menu"
          }), " en la esquina superior derecha."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Establezca el método de conexión en ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Solo mientras la app esté en pantalla"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Autenticación de dos factores"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Registrar PIN"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ingrese el PIN de seis dígitos."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la notificación de éxito, toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Aceptar"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Cambiar PIN"
            }), ", luego ingrese el nuevo PIN para cambiarlo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Active ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Autenticación Biométrica"
            }), " y siga las instrucciones de configuración para usar la biometría."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android",
      children: "Usuarios Android"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pantalla principal de la app Suprema Pass, toque ", (0,jsx_runtime.jsx)(IcHamberg, {
            title: "Hamburger menu"
          }), " en la esquina superior derecha."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure el método de conexión en ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Solo mientras la aplicación esté en pantalla"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            children: "NFC"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Autenticación de dos factores"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "PIN"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Registrar PIN"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Patrón"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Registrar Patrón"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ingrese el PIN o patrón seleccionado."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la notificación de éxito, toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Aceptar"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Cambiar PIN"
            }), ", luego ingrese el nuevo PIN para cambiarlo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Cambiar Patrón"
            }), ", luego ingrese el nuevo patrón para cambiarlo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Active ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Autenticación Biométrica"
            }), " y siga las instrucciones de configuración para usar la biometría."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accesslogs",
      children: "Registros de acceso"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice los registros de acceso para rastrear intentos de acceso y solucionar problemas relacionados con el acceso."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-access-log.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pantalla principal de la app Suprema Pass, toque ", (0,jsx_runtime.jsx)(IcHamberg, {
            title: "Hamburger menu"
          }), " en la esquina superior derecha."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Registros de acceso"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione un sitio y luego establezca las fechas de inicio y fin."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Buscar"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "supportCenter",
      children: "Centro de soporte"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vaya a ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Centro de soporte"
      }), " para obtener asistencia adicional."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-support.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pantalla principal de la app Suprema Pass, toque ", (0,jsx_runtime.jsx)(IcHamberg, {
            title: "Hamburger menu"
          }), " en la esquina superior derecha."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Más"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Centro de soporte"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a la página ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Soporte técnico de Suprema"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Busque preguntas o revise las preguntas frecuentes."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si necesita asistencia, toque el icono de chat en la esquina inferior derecha para enviar un ticket al equipo de MOCA Systems."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-avanzada",
      children: "Configuración Avanzada"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Toque ", (0,jsx_runtime.jsx)(IcHamberg, {
        title: "Hamburger menu"
      }), " en la esquina superior derecha de la pantalla de inicio de la aplicación Suprema Pass, luego seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Más"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Configuración Avanzada"
      }), " para usar las siguientes funciones adicionales."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-advanced.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuración de ubicación"
          }), ": Seleccione el servidor ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Global"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            children: "EU"
          }), " según su ubicación. Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Auto"
          }), " para que la app detecte su ubicación y elija el servidor adecuado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Autenticación Bluetooth"
          }), ": Active ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Prevención de apertura no deseada"
          }), " para bloquear la autenticación Bluetooth cuando el dispositivo móvil está inmóvil."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Configuración de Sensibilidad"
          }), ": Ajuste la sensibilidad Bluetooth entre el dispositivo móvil y el lector compatible con BioStar Air. Para más información, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/suprema-pass-app-sensitivity-settings"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additionalFeatures",
      children: "Funciones adicionales"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Toca ", (0,jsx_runtime.jsx)(IcHamberg, {
        title: "Hamburger menu"
      }), " en la esquina superior derecha de la pantalla principal de la app Suprema Pass, luego selecciona ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Más"
      }), " para acceder a las siguientes funciones."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Tema"
          }), ": Establece el modo de color de la app. Selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Claro"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Oscuro"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Sistema"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Informe de errores"
          }), ": Escribe información detallada, como el contexto en el que ocurrió el error y los pasos para reproducirlo, para enviar el informe al desarrollador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Detalles de la app"
          }), ": Consulta el nombre del modelo, la versión del sistema operativo y el soporte y el estado de BLE del dispositivo móvil."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Licencia de la app"
          }), ": Consulta la información sobre las licencias de código abierto utilizadas en la app Suprema Pass."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Términos y condiciones"
          }), ": Consulta los términos de uso de la plataforma BioStar Air."]
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