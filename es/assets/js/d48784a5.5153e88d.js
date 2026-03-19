"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["17143"], {
38884: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_integration_quickstart_mdx_d48_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-integration-quickstart-mdx-d48.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_integration_quickstart_mdx_d48_namespaceObject = JSON.parse('{"id":"platform/biostar_air/integration-quickstart","title":"Inicio rápido","description":"Esta guía muestra cómo configurar el entorno de demostración de BioStar Air, registrar dispositivos compatibles y generar claves de API.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/integration-quickstart.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/integration-quickstart","permalink":"/docs/es/platform/biostar_air/integration-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/integration-quickstart.mdx","tags":[],"version":"current","frontMatter":{"id":"integration-quickstart","title":"Inicio rápido","description":"Esta guía muestra cómo configurar el entorno de demostración de BioStar Air, registrar dispositivos compatibles y generar claves de API.","keywords":["Integración de la API","Inicio rápido","BioStar Air","Demo"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Desarrollador","permalink":"/docs/es/platform/biostar_air/developer-guide"},"next":{"title":"Autenticación de la API","permalink":"/docs/es/platform/biostar_air/api-authentication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/integration-quickstart.mdx


const frontMatter = {
	id: 'integration-quickstart',
	title: 'Inicio rápido',
	description: 'Esta guía muestra cómo configurar el entorno de demostración de BioStar Air, registrar dispositivos compatibles y generar claves de API.',
	keywords: [
		'Integración de la API',
		'Inicio rápido',
		'BioStar Air',
		'Demo'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Requisitos previos",
  "id": "pre-requisites",
  "level": 2
}, {
  "value": "Configura el entorno de demostración y la clave de API",
  "id": "demo-setup",
  "level": 2
}, {
  "value": "Regístrate e inicia sesión",
  "id": "regístrate-e-inicia-sesión",
  "level": 3
}, {
  "value": "Crea una aplicación de demostración",
  "id": "crea-una-aplicación-de-demostración",
  "level": 3
}, {
  "value": "Generar una clave API",
  "id": "generar-una-clave-api",
  "level": 3
}, {
  "value": "Inicia sesión en el portal de demostración",
  "id": "inicia-sesión-en-el-portal-de-demostración",
  "level": 3
}, {
  "value": "Registrar dispositivos",
  "id": "registerDevices",
  "level": 2
}, {
  "value": "Gestión Dispositivos",
  "id": "gestión-dispositivos",
  "level": 2
}, {
  "value": "Demo vs producción",
  "id": "demo-vs-production",
  "level": 2
}, {
  "value": "¿Necesita ayuda?",
  "id": "need-help",
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
  }, {IcAdd, Step, Steps} = _components;
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía explica cómo configurar el sitio de demostración de BioStar Air, conectar y registrar dispositivos compatibles y probar la integración de la API en la nube. Si has trabajado con BioStar 2 antes, muchos conceptos te resultarán familiares. BioStar Air está completamente basado en la nube."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-requisites",
      children: "Requisitos previos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Antes de comenzar, comprueba lo siguiente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prepara un ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "dispositivo compatible con BioStar Air"
          }), " con el firmware en estado de fábrica."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-AIR, XS2-AIR, BEW3-AIR, BS3-AIR, BLN2-AIR"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Los dispositivos pueden comprarse a través de distribuidores autorizados de Suprema."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "El dispositivo debe estar conectado a Internet mediante Ethernet."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Permite el acceso saliente en la red."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Puerto 443 (HTTPS)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Puerto 5671 (MQTT sobre TLS)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-setup",
      children: "Configura el entorno de demostración y la clave de API"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "regístrate-e-inicia-sesión",
          children: "Regístrate e inicia sesión"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ve a ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developers.biostarair.com/login",
                children: "BioStar Air Developer"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Regístrate"
              }), ", completa el formulario y espera la aprobación."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Después de la aprobación, inicia sesión con tus credenciales."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "crea-una-aplicación-de-demostración",
          children: "Crea una aplicación de demostración"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ve a ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "API"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Gestión"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "+ Registrar"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Selecciona ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Demo"
              }), " como tipo de aplicación."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Introduce un nombre para la aplicación y haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Registrar"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Descargar"
              }), " para obtener el archivo Excel con las credenciales de acceso al sitio de demostración (correo electrónico y contraseña)."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "generar-una-clave-api",
          children: "Generar una clave API"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Gestión de aplicaciones"
              }), ", haz clic en la aplicación que registraste."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Desplázate hasta ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Gestión de API"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Agregar"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Introduce un nombre y confírmalo. Guarda la clave generada."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "inicia-sesión-en-el-portal-de-demostración",
          children: "Inicia sesión en el portal de demostración"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ve al ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://demo.airfobspace.com/login",
                children: "Portal de demostración"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Inicia sesión con el correo electrónico y la contraseña del archivo Excel."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Introduce la clave API que acabas de generar."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registerDevices",
      children: "Registrar dispositivos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usa la aplicación BioStar Air Demo (solo Android) en tu dispositivo móvil."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el siguiente enlace para descargar la aplicación móvil. ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://moca-public-file-share.s3.ap-northeast-2.amazonaws.com/DeviceRegistration.zip",
            children: "DeviceRegistration.zip"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Inicia sesión con las credenciales del archivo Excel."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Acerca tu dispositivo Android al lector (dentro del alcance BLE)."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Menú principal"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Dispositivos"
              }), ", pulsa el botón ", (0,jsx_runtime.jsx)(IcAdd, {}), " en la esquina superior derecha."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Busca el dispositivo y pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Registrar"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "El dispositivo emite un pitido, se reinicia y aparece en la lista de dispositivos registrados."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Los dispositivos solo se pueden registrar a través de la aplicación móvil. No es posible registrar dispositivos desde el portal web. El registro mediante API requiere un certificado de cifrado que no se proporciona a los socios."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gestión-dispositivos",
      children: "Gestión Dispositivos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gestiona los dispositivos desde la app Demo o desde el portal web de demostración."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Demo App"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Portal web de demostración"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://demo.airfobspace.com/login",
            children: "https://demo.airfobspace.com/login"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-vs-production",
      children: "Demo vs producción"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Un sitio ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Demo"
          }), " para pruebas se crea a través del ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developers.biostarair.com/login",
            children: "Portal de desarrolladores"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Un sitio de producción se crea a través del ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com/",
            children: "Portal de socios"
          }), " y requiere un ID de sitio, correo electrónico de usuario y contraseña. Solo los revendedores autorizados o las sucursales de Suprema pueden crear un sitio de producción."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los ID de usuario y los ID de cuenta son diferentes. No los confundas."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si administra varios sitios, guarde las contraseñas de forma segura."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Utilice siempre el token Bearer más reciente."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Un token Bearer copiado del navegador puede reutilizarse en Postman."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "need-help",
      children: "¿Necesita ayuda?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Abra un ticket en el Portal de Soporte Técnico de Suprema. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://support.supremainc.com",
        children: "https://support.supremainc.com"
      })]
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