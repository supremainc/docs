"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["53634"], {
47874: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_install_communication_server_mdx_0b7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-install-communication-server-mdx-0b7.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_install_communication_server_mdx_0b7_namespaceObject = JSON.parse('{"id":"platform/biostar_x/install-communication-server","title":"Instalar el servidor de comunicación","description":"Este documento guía el proceso de instalación del servidor de comunicación.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/install-communication-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/install-communication-server","permalink":"/docs/es/platform/biostar_x/install-communication-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/install-communication-server.mdx","tags":[],"version":"current","frontMatter":{"id":"install-communication-server","title":"Instalar el servidor de comunicación","description":"Este documento guía el proceso de instalación del servidor de comunicación.","keywords":["Servidor de comunicación","Instalación"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Actualizar","permalink":"/docs/es/platform/biostar_x/migration-x"},"next":{"title":"Cómo iniciar sesión","permalink":"/docs/es/platform/biostar_x/login"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/install-communication-server.mdx


const frontMatter = {
	id: 'install-communication-server',
	title: 'Instalar el servidor de comunicación',
	description: 'Este documento guía el proceso de instalación del servidor de comunicación.',
	keywords: [
		'Servidor de comunicación',
		'Instalación'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Antes de empezar",
  "id": "start-before",
  "level": 2
}, {
  "value": "Verificaciones previas a la instalación",
  "id": "check-before-install",
  "level": 3
}, {
  "value": "Guía de instalación",
  "id": "install-guide",
  "level": 2
}, {
  "value": "Verificaciones posteriores a la instalación",
  "id": "check-after-install",
  "level": 2
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Este documento explica cómo instalar el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Communication Server"
      }), " de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El servidor de comunicación es un servidor dedicado a la comunicación con dispositivos de control de acceso. Al instalarlo por separado del servidor principal, ayuda a gestionar muchos dispositivos de forma confiable. Un solo servidor de comunicación puede conectar hasta 1,000 dispositivos, y se pueden agregar varios servidores de comunicación según sea necesario."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "start-before",
      children: "Antes de empezar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Antes de instalar el servidor de comunicación, verifique los siguientes elementos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["El servidor de comunicación no puede instalarse en el mismo servidor que el servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["El servidor de comunicación solo puede instalarse en un sistema operativo de 64 bits. Para obtener más información sobre los requisitos mínimos del sistema, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "system-requirements#communication-server",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Se requiere una licencia de multi-servidor de comunicación para instalar y conectar el servidor de comunicación. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "licensing#features-add-ons",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-before-install",
      children: "Verificaciones previas a la instalación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Antes de instalar el servidor de comunicación, ejecute ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), " para comprobar la información necesaria durante la instalación."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), " en Windows."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La ventana ", (0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), " aparece."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SERVICE SETTINGS"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A continuación se muestra la información necesaria al instalar el servidor de comunicación. Revise y prepare cada elemento."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-cumm-server-matching.png"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "BioStar X Service Manager"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Información requerida para la instalación del servidor de comunicación"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Core Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "RPC Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Puerto gRPC del servidor BioStar X para comunicación"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Coordinator Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Client Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Puerto del servicio BioStar X Coordinator para comunicación"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Cache Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Client Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Cliente del servicio BioStar X Cache para comunicación"
              })
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre ", (0,jsx_runtime.jsx)(Cmd, {
          children: "SERVICE SETTINGS"
        }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "service-settings",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "install-guide",
      children: "Guía de instalación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga los pasos a continuación para instalar el servidor de comunicación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Acceda al ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://download.supremainc.com/",
            children: "Suprema Download Center"
          }), ", inicie sesión y descargue el paquete de instalación (", (0,jsx_runtime.jsx)(_components.em, {
            children: "BioStar X Communications Server.X.Y.X.BB.exe"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecute el archivo de instalación descargado."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el idioma a usar y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.ok",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-select-language.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para continuar con la instalación, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.agree",
            className: "bold"
          }), " y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-license-agree.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Establezca la ruta donde se instalará el servidor de comunicación y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-set-path.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Revise los permisos y responsabilidades relacionados con la información personal y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " para continuar con la instalación."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-private-policy.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione los componentes del servidor de comunicación y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-select-component.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese la dirección IP y el número de puerto del servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ", e introduzca los detalles para la conexión al servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Complete su configuración y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-settings.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cada elemento de entrada, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#check-before-install",
              children: "lo siguiente"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure el puerto para la comunicación y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-port-settings.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando se completen todas las preparaciones para la instalación, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.btnInstall",
            className: "bold"
          }), ". Proceda con la instalación."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-install-step.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifique el mensaje de finalización de instalación y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.complete",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-complete.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Complete la instalación del servidor de comunicación. Una vez finalizada la instalación, verifique la conexión entre el servidor de comunicación y el servidor principal de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-after-install",
      children: "Verificaciones posteriores a la instalación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Después de completar la instalación del servidor de comunicación, necesita conectar el servidor principal y el servidor de comunicación mediante ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), " en Windows."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La ventana ", (0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), " aparece."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la barra lateral izquierda, haga clic en el menú ", (0,jsx_runtime.jsx)(Cmd, {
            children: "COMMUNICATIONS"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-sm-cluster-main-01.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Add Communication Server"
          }), " en la esquina superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Add Communication Server"
          }), ", marque la casilla del elemento que coincida con la dirección IP del servidor de comunicación instalado y seleccione la base de datos a usar en la columna ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Database"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-sm-cluster-main-03.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Add"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la lista de servidores de comunicación, verifique que la columna ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Server Status"
      }), " del servidor de comunicación agregado esté en estado ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Connected"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cluster-main-04.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El menú ", (0,jsx_runtime.jsx)(Cmd, {
              children: "COMMUNICATIONS"
            }), " puede usarse cuando la licencia de multi-servidor de comunicación está activada. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para eliminar el servidor de comunicación, marque la casilla del servidor que desea eliminar en la lista y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Delete Communication Server"
            }), " en la esquina superior derecha de la pantalla."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al agregar un servidor de comunicación, también se puede agregar una base de datos secundaria para reducir la carga en el servidor principal. Para obtener más información sobre cómo agregar una base de datos secundaria, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-sub-db",
              children: "lo siguiente"
            }), "."]
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