"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["57325"], {
3299: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_https_mdx_b8b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-server-https-mdx-b8b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_https_mdx_b8b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-server-https","title":"Instalar Certificado HTTPS","description":"Para conectar BioStar X mediante HTTPS, debe registrar la dirección IP del servidor donde está instalado BioStar X para instalar el certificado.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-https.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-server-https","permalink":"/docs/es/platform/biostar_x/settings-server-https","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-server-https.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-server-https","title":"Instalar Certificado HTTPS","description":"Para conectar BioStar X mediante HTTPS, debe registrar la dirección IP del servidor donde está instalado BioStar X para instalar el certificado.","keywords":["HTTPS","Certificado"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración detallada del servidor","permalink":"/docs/es/platform/biostar_x/settings-server-server"},"next":{"title":"Activar licencia","permalink":"/docs/es/platform/biostar_x/settings-license"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-https.mdx


const frontMatter = {
	id: 'settings-server-https',
	title: 'Instalar Certificado HTTPS',
	description: 'Para conectar BioStar X mediante HTTPS, debe registrar la dirección IP del servidor donde está instalado BioStar X para instalar el certificado.',
	keywords: [
		'HTTPS',
		'Certificado'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Cuándo se requiere la instalación del certificado",
  "id": "cuándo-se-requiere-la-instalación-del-certificado",
  "level": 2
}, {
  "value": "Instalación del certificado",
  "id": "instalación-del-certificado",
  "level": 2
}, {
  "value": "Instalación del certificado en la configuración del servidor",
  "id": "instalación-del-certificado-en-la-configuración-del-servidor",
  "level": 2
}, {
  "value": "Instalación del certificado para el servidor VMS",
  "id": "vms-certification",
  "level": 2
}, {
  "value": "Instalación de certificado en PC cliente",
  "id": "install-client-certification",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para conectar ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " mediante HTTPS, debe registrar la dirección IP del servidor donde está instalado ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " para instalar el certificado."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cuándo-se-requiere-la-instalación-del-certificado",
      children: "Cuándo se requiere la instalación del certificado"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si accede a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " sin tener instalado el certificado HTTPS, aparecerá una advertencia de seguridad como la siguiente en su navegador web."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-not-secure.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Estas advertencias aparecen porque el navegador no puede verificar la identidad del servidor. La instalación del certificado hará que el navegador confíe en el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", lo que permitirá una conexión HTTPS segura sin advertencias de seguridad."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instalación-del-certificado",
      children: "Instalación del certificado"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instale el certificado antes de utilizar ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " para garantizar la conectividad de red correcta."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Acceda a la página de inicio de sesión de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el enlace ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auth.httpsDownload"
          }), " en la parte inferior de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-login-down-https-cert.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Guarde el archivo ", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), " localmente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Extraiga el archivo descargado y ejecute el archivo ", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.exe"
          }), ". Se ejecuta el programa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll Certificate"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), ", introduzca la dirección IP del PC donde está instalado ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Address"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-certification.png",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El número de puerto predeterminado para ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " es 443. Si cambió el número de puerto, introduzca el nuevo número en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifique el mensaje de advertencia de seguridad y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Yes"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reinicie el navegador web e introduzca la dirección IP registrada para acceder a la página de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Al hacer clic en el ícono a la izquierda de la barra de direcciones, aparecerá el mensaje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Esta conexión es segura"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-secure.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La dirección IP introducida en ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enroll Certificate"
        }), " debe ser la misma que la establecida en ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". Compruébela en la ruta de menú ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.server.root"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.server.server"
        }), " en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.biostarIPAdress",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instalación-del-certificado-en-la-configuración-del-servidor",
      children: "Instalación del certificado en la configuración del servidor"
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
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.certDownload",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-https.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Guarde el archivo ", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), " localmente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Descomprima el archivo descargado y ejecute el archivo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), ". Se ejecuta el programa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll Certificate"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), ", introduzca la dirección IP del PC donde está instalado ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Address"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-certification.png",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El número de puerto predeterminado para ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " es 443. Si cambió el número de puerto, introduzca el nuevo número en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifique el mensaje de advertencia de seguridad y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Yes"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reinicie el navegador web e introduzca la dirección IP registrada para acceder a la página de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Al hacer clic en el ícono a la izquierda de la barra de direcciones, aparecerá el mensaje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Esta conexión es segura"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-secure.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-certification",
      children: "Instalación del certificado para el servidor VMS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si se presentan las siguientes situaciones, instala el certificado desde el servidor VMS en el PC cliente para resolver el problema."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al acceder al ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sistema de Gestión de Video"
          }), " (VMS) a través del navegador y aparece una advertencia \"No es seguro\""]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando el video en tiempo real se reproduce en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " pero el video grabado no se reproduce"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al instalar el servidor VMS y ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " en el mismo servidor"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre cómo instalar el certificado en el servidor VMS, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-video-integration#install-vms-certification",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función para integrar con el servidor VMS debe comprarse por separado en un paquete de opciones adicional. Para obtener más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "install-client-certification",
      children: "Instalación de certificado en PC cliente"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Descargue el instalador del certificado HTTPS (", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), ") desde la pantalla de inicio de sesión o desde ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), " en la PC cliente donde está instalado ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Descomprima el archivo descargado y ejecute el archivo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), ". Se ejecuta el programa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll Certificate"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "VMS"
          }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), " e ingrese la siguiente información."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-vms-certification.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              }), ": dirección IP del servidor VMS"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port"
              }), ": número de puerto del servidor VMS"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifique el mensaje de advertencia de seguridad y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Yes"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reinicie el navegador web y verifique que el video grabado del servidor VMS se reproduzca normalmente en la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "."]
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