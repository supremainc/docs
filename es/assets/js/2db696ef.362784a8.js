"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["12326"], {
2337: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_user_card_types_mdx_2db_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-user-card-types-mdx-2db.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_user_card_types_mdx_2db_namespaceObject = JSON.parse('{"id":"platform/biostar_air/user-card-types","title":"Tipos de tarjetas y credenciales de usuario","description":"Este artículo presenta los tipos de usuario (regular y temporal) compatibles desde la versión 2.6 de BioStar Air y las credenciales disponibles para cada uno. Los usuarios regulares pueden usar tarjeta móvil, tarjeta RF, código QR, LinkPass, reconocimiento facial y PIN, mientras que los usuarios temporales pueden usar el código QR dinámico basado en la web y LinkPass.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/user-card-types.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/user-card-types","permalink":"/docs/es/platform/biostar_air/user-card-types","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/user-card-types.mdx","tags":[],"version":"current","frontMatter":{"id":"user-card-types","title":"Tipos de tarjetas y credenciales de usuario","description":"Este artículo presenta los tipos de usuario (regular y temporal) compatibles desde la versión 2.6 de BioStar Air y las credenciales disponibles para cada uno. Los usuarios regulares pueden usar tarjeta móvil, tarjeta RF, código QR, LinkPass, reconocimiento facial y PIN, mientras que los usuarios temporales pueden usar el código QR dinámico basado en la web y LinkPass.","keywords":["Gestión Usuarios","BioStar Air","Tipos de tarjetas de usuario"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Administrar plantillas de tarjeta","permalink":"/docs/es/platform/biostar_air/managing-card-templates"},"next":{"title":"Credenciales LinkPass","permalink":"/docs/es/platform/biostar_air/linkpass-credentials"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/user-card-types.mdx


const frontMatter = {
	id: 'user-card-types',
	title: 'Tipos de tarjetas y credenciales de usuario',
	description: 'Este artículo presenta los tipos de usuario (regular y temporal) compatibles desde la versión 2.6 de BioStar Air y las credenciales disponibles para cada uno. Los usuarios regulares pueden usar tarjeta móvil, tarjeta RF, código QR, LinkPass, reconocimiento facial y PIN, mientras que los usuarios temporales pueden usar el código QR dinámico basado en la web y LinkPass.',
	keywords: [
		'Gestión Usuarios',
		'BioStar Air',
		'Tipos de tarjetas de usuario'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Tipos de tarjetas para usuarios regulares",
  "id": "regular-user-card-typs",
  "level": 2
}, {
  "value": "Autenticación facial",
  "id": "face",
  "level": 3
}, {
  "value": "PIN",
  "id": "pin",
  "level": 3
}, {
  "value": "Tipos de tarjetas para usuarios temporales",
  "id": "temporary-user-card-typs",
  "level": 2
}, {
  "value": "Administrar niveles de acceso",
  "id": "managing-access-levels",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "A partir de la versión 2.6 de BioStar Air se introdujeron dos tipos de usuario para mejorar la gestión."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_regular_card_type",
            product: "air"
          }), ": Un usuario que es miembro regular de una organización o instalación y que requiere acceso a largo plazo. Se pueden emitir todos los tipos de credenciales."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_temporary_card_type",
            product: "air"
          }), ": Un visitante o miembro no regular que necesita acceso limitado y de corta duración. Esto puede incluir huéspedes, visitantes externos, contratistas temporales, mensajeros de entrega, etc. Solo se pueden emitir las credenciales ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input20",
            product: "air"
          }), ", incluyendo el código QR y LinkPass."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la emisión de credenciales al agregar o editar usuarios, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/adding-individual-users#issuingCredentials"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Vea el video a continuación para obtener un tutorial sobre los tipos de usuario y de tarjeta."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "xTxIzG-30S0"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "regular-user-card-typs",
      children: "Tipos de tarjetas para usuarios regulares"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Las credenciales que puede emitir a los usuarios regulares son las siguientes."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre cómo usar credenciales móviles con la aplicación Suprema Pass, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/opening-doors-with-mobile-credentials"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobileCard",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_mobile",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Se asigna automáticamente un ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ID de tarjeta"
          }), " único, aunque también puede establecerse manualmente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al usar un ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Tag"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Patch"
          }), ", integre el sistema de control de acceso existente utilizando el número de la tarjeta móvil como número de serie de la tarjeta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para compatibilidad con un sistema anterior, el ID de la tarjeta móvil puede coincidir con el número de tarjeta RF del sitio anterior."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rfCard",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_rf",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agregue hasta ocho tarjetas RFID por usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rf_card_type",
            product: "air"
          }), " (CSN o Wiegand), ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_id",
            product: "air"
          }), ", y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rf_card_name",
            product: "air"
          }), " para simplificar la gestión cuando se asignan varias tarjetas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione un lector en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "newest_rf_card_text_device",
            product: "air"
          }), " para escanear una tarjeta RFID existente con un dispositivo Suprema conectado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si una tarjeta RF existente tiene un ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSN"
          }), " (número de serie de la tarjeta), ingrese el CSN manualmente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qrCode",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_option3",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Los usuarios regulares pueden usar el ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "código QR"
          }), " de una tarjeta móvil."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Acceda al código QR tocando el botón en la interfaz de la tarjeta móvil."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linkPass",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_option4",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Envíe un enlace web a la dirección de correo electrónico o al número de teléfono del usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["El usuario abre el enlace recibido en un navegador web y hace clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "web_card_preview_button1",
            product: "air"
          }), " para obtener acceso."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre las credenciales LinkPass, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/linkpass-credentials"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "face",
      children: "Autenticación facial"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agregue hasta dos imágenes de perfil facial por usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Regístrate mediante un lector conectado o cargando una imagen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Envía al usuario un enlace por correo electrónico y, a continuación, captura una foto con la cámara del dispositivo móvil para registrarlo."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pin",
      children: "PIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Establece un PIN de 4 a 16 dígitos para usar como parte de la autenticación de dos factores (2FA)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "temporary-user-card-typs",
      children: "Tipos de tarjetas para usuarios temporales"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los usuarios temporales no reciben tarjetas móviles ni tarjetas RFID. En su lugar, emite ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "credenciales web"
      }), " que no requieren la descarga de una aplicación. Las opciones disponibles son las siguientes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "TempQrCode",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_option3",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Envía por correo electrónico o por mensaje de texto."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Accesible a través de un navegador web."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Usa un ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "código QR dinámico"
          }), ", que se actualiza cada cinco minutos, para mejorar la seguridad."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "TempLinkPass",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_option4",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Envía al usuario un enlace web por correo electrónico o por mensaje de texto. El usuario obtiene acceso al hacer clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "web_card_preview_button1",
        product: "air"
      }), " en un navegador web."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre las credenciales LinkPass, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/linkpass-credentials"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "managing-access-levels",
      children: "Administrar niveles de acceso"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configura los ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "niveles de acceso"
      }), " para controlar dónde se pueden usar las credenciales, independientemente de si el usuario es regular o temporal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Si el usuario es temporal, asigna con cuidado niveles de acceso restrictivos y evita emitir credenciales con acceso ilimitado."
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