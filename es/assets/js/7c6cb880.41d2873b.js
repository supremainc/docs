"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7395"], {
9374: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_initial_setup_guide_mdx_7c6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-initial-setup-guide-mdx-7c6.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_initial_setup_guide_mdx_7c6_namespaceObject = JSON.parse('{"id":"platform/biostar_x/initial-setup-guide","title":"Guía de configuración inicial","description":"Este documento ofrece instrucciones paso a paso para la configuración inicial y la operación del sistema de control de acceso **BioStar X**.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/initial-setup-guide.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/initial-setup-guide","permalink":"/docs/es/platform/biostar_x/initial-setup-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/initial-setup-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"initial-setup-guide","title":"Guía de configuración inicial","description":"Este documento ofrece instrucciones paso a paso para la configuración inicial y la operación del sistema de control de acceso **BioStar X**.","keywords":["Configuración inicial","Registrar dispositivo","Configuración de control de acceso","Registrar usuarios"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Registrar clave de licencia","permalink":"/docs/es/platform/biostar_x/register-license-key"},"next":{"title":"Administración de servidores","permalink":"/docs/es/platform/biostar_x/server-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/initial-setup-guide.mdx


const frontMatter = {
	id: 'initial-setup-guide',
	title: 'Guía de configuración inicial',
	description: 'Este documento ofrece instrucciones paso a paso para la configuración inicial y la operación del sistema de control de acceso **BioStar X**.',
	keywords: [
		'Configuración inicial',
		'Registrar dispositivo',
		'Configuración de control de acceso',
		'Registrar usuarios'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Registrar dispositivo",
  "id": "registrar-dispositivo",
  "level": 2
}, {
  "value": "Registro y configuración de puertas",
  "id": "registro-y-configuración-de-puertas",
  "level": 2
}, {
  "value": "Configuración de niveles de acceso",
  "id": "configuración-de-niveles-de-acceso",
  "level": 2
}, {
  "value": "Configuración de grupos de acceso",
  "id": "configuración-de-grupos-de-acceso",
  "level": 2
}, {
  "value": "Registrar usuarios",
  "id": "registrar-usuarios",
  "level": 2
}, {
  "value": "Configuración avanzada de control de acceso",
  "id": "configuración-avanzada-de-control-de-acceso",
  "level": 2
}, {
  "value": "Monitorizar",
  "id": "monitorizar",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {DocLink, Step, Steps} = _components;
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se proporcionan configuraciones paso a paso para garantizar el funcionamiento adecuado de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " después de la instalación inicial. Sigue cada paso secuencialmente para crear un entorno de control de acceso eficiente."]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "registrar-dispositivo",
          children: "Registrar dispositivo"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Registra un dispositivo para conectarlo a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Configura modos de autenticación independientes según los dispositivos u asigna administradores a cada dispositivo."]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Además, establece acciones según diversos eventos generados por el dispositivo (como fallas de autenticación, autenticación de huella digital bajo coacción, infracciones de anti-passback, etc.)."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-manage-device-group"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-devices"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-wiegand"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-slave-device"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-device-details"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Obtenga una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Manager"
            }), " o superior para registrar dispositivos. Para obtener más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "lo siguiente"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "registro-y-configuración-de-puertas",
          children: "Registro y configuración de puertas"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Registra la información de las puertas donde están instalados los dispositivos. Configura el relé, anti-passback, autenticación dual, alarmas y más."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-manage-door-group"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-door-add"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "configuración-de-niveles-de-acceso",
          children: "Configuración de niveles de acceso"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Los niveles de acceso se crean combinando la información de puertas y horarios, lo que permite registrar varias puertas y horarios en un solo nivel de acceso."
        }), (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/settings-access-control-manage-access-level"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "configuración-de-grupos-de-acceso",
          children: "Configuración de grupos de acceso"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Los grupos de acceso se crean combinando niveles de acceso (puertas, horarios) e información de usuarios, lo que permite registrar múltiples niveles de acceso y usuarios en un solo grupo de acceso."
        }), (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/settings-access-control-manage-access-group"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "registrar-usuarios",
          children: "Registrar usuarios"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Registra información como datos de usuarios y credenciales para usar en el control de acceso. La información de usuarios puede registrarse directamente en el dispositivo o en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Además, la información de usuarios registrada en el dispositivo puede importarse a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ", o la información registrada en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " puede enviarse al dispositivo."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/user-group-manage"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/user-manage"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/add-user"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/enroll-credential"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "configuración-avanzada-de-control-de-acceso",
          children: "Configuración avanzada de control de acceso"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Configura anti-passback y alarma de incendio, con opciones para ajustes locales y globales."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-advanced-ac"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-map"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Disponible solo con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " o superior. Para obtener más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "lo siguiente"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "monitorizar",
          children: "Monitorizar"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Administra el sistema de control de acceso en tiempo real mediante diversas funciones de monitoreo como puertas, dispositivos y eventos."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-door"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-device"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-event"
            }), "\n"]
          }), "\n"]
        })]
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