"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["62726"], {
68315: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_remote_access_mdx_926_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-remote-access-mdx-926.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_remote_access_mdx_926_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-remote-access","title":"Configurar acceso remoto","description":"Esta guía explica cómo configurar el acceso remoto mediante el servicio ngrok.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-remote-access.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-remote-access","permalink":"/docs/es/platform/biostar_x/settings-remote-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-remote-access.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-remote-access","title":"Configurar acceso remoto","description":"Esta guía explica cómo configurar el acceso remoto mediante el servicio ngrok.","keywords":["remoto","acceso","ngrok"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración de Integración de Directorios","permalink":"/docs/es/platform/biostar_x/settings-diretory-integration"},"next":{"title":"Integrar el registro de eventos de dispositivos virtuales","permalink":"/docs/es/platform/biostar_x/settings-virtual-device-event-log"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-remote-access.mdx


const frontMatter = {
	id: 'settings-remote-access',
	title: 'Configurar acceso remoto',
	description: 'Esta guía explica cómo configurar el acceso remoto mediante el servicio ngrok.',
	keywords: [
		'remoto',
		'acceso',
		'ngrok'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "¿Cuándo usarlo?",
  "id": "cuándo-usarlo",
  "level": 2
}, {
  "value": "Configuración del acceso remoto",
  "id": "configuración-del-acceso-remoto",
  "level": 2
}, {
  "value": "Activar licencia de acceso remoto",
  "id": "activar-licencia-de-acceso-remoto",
  "level": 3
}, {
  "value": "Activar acceso remoto",
  "id": "activar-acceso-remoto",
  "level": 3
}, {
  "value": "Introducir la información de configuración de ngrok",
  "id": "introducir-la-información-de-configuración-de-ngrok",
  "level": 3
}, {
  "value": "Acceder a la URL del endpoint",
  "id": "acceder-a-la-url-del-endpoint",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["El acceso remoto a través de ngrok permite acceder de forma segura a redes internas desde redes externas. Esta función permite acceder al servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " de forma remota sin configuraciones de firewall ni reenvío de puertos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función de acceso remoto está disponible como una opción adicional. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Al adquirir la licencia de acceso remoto, Suprema genera una cuenta de bot, un endpoint y un documento de licencia para el uso de acceso remoto en el sitio ngrok de Suprema."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El acceso remoto se proporciona a través del servicio de túnel de terceros de ngrok. El acceso remoto se proporciona a través del servicio de túnel de terceros de ngrok. Antes de usar esta función, revise ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../legal/eula#remote-access-agreement",
              children: "Remote Access Feature Agreement"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStar X solo admite la conexión llamando a la API de ngrok, pero la seguridad y continuidad de la conectividad a Internet dependen completamente del servicio ngrok. Por lo tanto, Suprema no asume ninguna responsabilidad por incidentes de seguridad, pérdida de datos o vulneraciones del sistema que puedan ocurrir durante el uso de esta función."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cuándo-usarlo",
      children: "¿Cuándo usarlo?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use la función de acceso remoto en las siguientes situaciones."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando necesite conectarse al servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " desde una red externa"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando sea difícil conectarse directamente debido a firewalls o entornos NAT"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando desee configurar rápidamente el acceso remoto sin configuraciones de red complejas"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando necesite proporcionar derechos de acceso externos de manera temporal"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-del-acceso-remoto",
      children: "Configuración del acceso remoto"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "activar-licencia-de-acceso-remoto",
          children: "Activar licencia de acceso remoto"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Inicie sesión con su ID de administrador de ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
                sid: "setting.menu.license.root"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.license.biostarXLicense"
              }), " en la barra lateral izquierda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Introduzca la clave de licencia de acceso remoto y el nombre de administrador proporcionados por Suprema y, a continuación, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.license.button.activate",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre el registro de licencias, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-license-biostar-x-license",
              children: "lo siguiente"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "activar-acceso-remoto",
          children: "Activar acceso remoto"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Inicie sesión con su ID de administrador de ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
                sid: "setting.menu.remoteAccess.root"
              }), " en la barra lateral izquierda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.section.title"
              }), ", cambie la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.remoteAccess.root"
              }), " a ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-remote-access.png"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "introducir-la-información-de-configuración-de-ngrok",
          children: "Introducir la información de configuración de ngrok"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Introduzca la información de configuración de ngrok proporcionada por Suprema."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.ngrokUserId"
              }), ": Introduzca su cuenta de ngrok."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.tunnelToken"
              }), ": Introduzca su ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Authtoken"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.hostURL"
              }), ": Introduzca la URL del endpoint. La URL tiene el formato ", (0,jsx_runtime.jsx)(_components.code, {
                children: "your-name.bsx.ngrok.app"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de introducir toda la información, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), ". Si aparece una ventana de mensaje de advertencia, verifique el contenido y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.remoteAccess.button.agree"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceder-a-la-url-del-endpoint",
      children: "Acceder a la URL del endpoint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Después de completar la configuración, verifique si puede acceder al servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " desde una red externa usando la URL del endpoint que introdujo en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.remoteAccess.field.hostURL"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Si no puede acceder mediante la URL del endpoint desde una red externa, póngase en contacto con el punto de venta o distribuidor que emitió su licencia."
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