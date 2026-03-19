"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6269"], {
35371: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_opening_doors_with_mobile_credentials_mdx_bcc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-opening-doors-with-mobile-credentials-mdx-bcc.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_opening_doors_with_mobile_credentials_mdx_bcc_namespaceObject = JSON.parse('{"id":"platform/biostar_air/opening-doors-with-mobile-credentials","title":"Uso de credenciales móviles","description":"Aprenda cómo abrir puertas con las credenciales móviles de Suprema Pass mediante Bluetooth o NFC, configurar el modo de funcionamiento de la app y usar varios métodos de autenticación (acercar el dispositivo, mantener presionada la tarjeta, escanear un código QR).","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/opening-doors-with-mobile-credentials.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/opening-doors-with-mobile-credentials","permalink":"/docs/es/platform/biostar_air/opening-doors-with-mobile-credentials","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/opening-doors-with-mobile-credentials.mdx","tags":[],"version":"current","frontMatter":{"id":"opening-doors-with-mobile-credentials","title":"Uso de credenciales móviles","description":"Aprenda cómo abrir puertas con las credenciales móviles de Suprema Pass mediante Bluetooth o NFC, configurar el modo de funcionamiento de la app y usar varios métodos de autenticación (acercar el dispositivo, mantener presionada la tarjeta, escanear un código QR).","keywords":["Credenciales Móviles","Suprema Pass","Abrir puertas","Bluetooth","NFC"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Credencial de usuario","permalink":"/docs/es/platform/biostar_air/credential-users-guide"},"next":{"title":"Configurar funciones avanzadas","permalink":"/docs/es/platform/biostar_air/suprema-pass-app-advanced-features"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/opening-doors-with-mobile-credentials.mdx


const frontMatter = {
	id: 'opening-doors-with-mobile-credentials',
	title: 'Uso de credenciales móviles',
	description: 'Aprenda cómo abrir puertas con las credenciales móviles de Suprema Pass mediante Bluetooth o NFC, configurar el modo de funcionamiento de la app y usar varios métodos de autenticación (acercar el dispositivo, mantener presionada la tarjeta, escanear un código QR).',
	keywords: [
		'Credenciales Móviles',
		'Suprema Pass',
		'Abrir puertas',
		'Bluetooth',
		'NFC'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Requisitos y preparación",
  "id": "requisitos-y-preparación",
  "level": 2
}, {
  "value": "Establecer método de conexión",
  "id": "setCoonection",
  "level": 2
}, {
  "value": "Abrir puertas",
  "id": "abrir-puertas",
  "level": 2
}, {
  "value": "Acerque su dispositivo móvil a un lector",
  "id": "acerque-su-dispositivo-móvil-a-un-lector",
  "level": 3
}, {
  "value": "Mantén presionada la tarjeta móvil",
  "id": "mantén-presionada-la-tarjeta-móvil",
  "level": 3
}, {
  "value": "Autenticación QR",
  "id": "autenticación-qr",
  "level": 3
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
  }, {Cmd, Column, Columns, DocLink, IcHamberg, IcSpqr, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!IcSpqr) _missingMdxReference("IcSpqr", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice credenciales móviles en lugar de tarjetas RFID plásticas para abrir las puertas con la app Suprema Pass. Acerque el dispositivo móvil al lector mediante Bluetooth o NFC, mantenga presionada la tarjeta o escanee un código QR para abrir las puertas."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La app Suprema Pass actúa como interfaz de usuario del sistema BioStar Air y funciona principalmente como una billetera digital para credenciales móviles. Los usuarios emiten y almacenan en la app las tarjetas de acceso móviles para ingresar a áreas seguras con sus dispositivos móviles."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requisitos-y-preparación",
      children: "Requisitos y preparación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cumpla los siguientes requisitos para abrir puertas con credenciales móviles."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Debe instalarse un dispositivo de control de acceso compatible con las credenciales móviles de Suprema Pass."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Instale la app Suprema Pass en el dispositivo móvil."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://apps.apple.com/kr/app/suprema-pass/id6745057639",
                children: "iOS"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://play.google.com/store/apps/details?id=com.supremainc.supremapass",
                children: "Android"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Active Bluetooth o NFC en el dispositivo móvil."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Activar la autenticación en dos pasos desactiva ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Modo en segundo plano"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "El administrador debe habilitar la autenticación QR en el portal de BioStar Air."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifique que el sitio admita el método de acceso manos libres."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los servicios de ubicación son necesarios para autenticar la tarjeta de acceso móvil en Suprema Pass. Consulte las preguntas frecuentes relacionadas en ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/location-services-issues"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Siga las instrucciones proporcionadas para solucionar el problema si la tarjeta móvil se autentica con el dispositivo pero la puerta no se abre. Consulte las preguntas frecuentes relacionadas en ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/troubleshooting-suprema-pass-app"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "mt--50",
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--20",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-sp-app-menus.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l20",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "setCoonection",
          children: "Establecer método de conexión"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione entre dos modos de funcionamiento en la app Suprema Pass. En la pantalla de inicio de la app Suprema Pass, toque ", (0,jsx_runtime.jsx)(IcHamberg, {}), " en la esquina superior derecha y luego seleccione el modo deseado en ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Método de conexión"
          }), "."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Solo mientras la app esté en pantalla"
              }), ": Abra la puerta solo cuando la app aparezca en pantalla y la tarjeta móvil sea visible."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Modo en segundo plano"
              }), ": Abra la puerta incluso si el teléfono está bloqueado cuando la app se ejecuta en segundo plano."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Independientemente del modo, acerque el dispositivo móvil al lector para autenticarse."
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abrir-puertas",
      children: "Abrir puertas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use la app Suprema Pass para abrir puertas de varias formas."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "acerque-su-dispositivo-móvil-a-un-lector",
      children: "Acerque su dispositivo móvil a un lector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Acerca el dispositivo móvil a un lector compatible con BioStar Air y autentícate mediante Bluetooth o NFC para abrir la puerta."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Asegúrate de que la app Suprema Pass esté abierta."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Acerca la zona de la antena Bluetooth o NFC del dispositivo móvil al lector."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "La puerta se abre cuando la credencial móvil se autentica."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Elige entre dos modos de comunicación. Para más información, consulta ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/suprema-pass-app-advanced-features"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Modo Bluetooth"
                }), ": El dispositivo móvil se comunica de forma inalámbrica con el lector."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Modo NFC"
                }), ": Disponible solo en dispositivos Android; acerca el dispositivo móvil al lector para autenticarte."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La ubicación de la antena Bluetooth o NFC varía según el modelo. Consulta las especificaciones del dispositivo para conocer el punto de contacto óptimo."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mantén-presionada-la-tarjeta-móvil",
      children: "Mantén presionada la tarjeta móvil"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mantén presionada la tarjeta móvil en la app Suprema Pass para abrir la puerta."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Muestra la pantalla principal de la app Suprema Pass."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mantén presionada la tarjeta móvil cerca de un lector compatible con BioStar Air durante 2–3 segundos."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "La puerta se abre cuando la credencial móvil se autentica."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Selecciona ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Modo en segundo plano"
            }), " en ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Método de conexión"
            }), " para usar esta función. Para más información, consulta ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#setCoonection"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Por motivos de seguridad, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "el administrador del sitio puede deshabilitar esta función"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "El alcance efectivo"
            }), " varía según la potencia Bluetooth del dispositivo móvil."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los lectores de control de acceso cercanos pueden provocar autenticaciones no deseadas."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autenticación-qr",
      children: "Autenticación QR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si el administrador habilita la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_qr_label",
        product: "air"
      }), " en el portal BioStar Air, puedes abrir la puerta escaneando el código QR desde la app Suprema Pass con un lector de códigos QR. En la pantalla principal de la app Suprema Pass, toca el icono ", (0,jsx_runtime.jsx)(IcSpqr, {
        title: "QR Scan"
      }), " debajo de la tarjeta móvil."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-contact-qrcode.png",
      width: "50%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para más información sobre la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_qr_label",
              product: "air"
            }), ", consulta ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/site-additional-settings"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La autenticación QR está disponible únicamente en puertas equipadas con un lector de códigos QR."
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