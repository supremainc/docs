"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["73958"], {
26193: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_lockoverride_mdx_67b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-lockoverride-mdx-67b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_lockoverride_mdx_67b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/lockoverride","title":"Configurar permisos de apertura de emergencia","description":"Esta guía explica cómo otorgar permisos de apertura de emergencia a las credenciales de tarjeta para que usuarios específicos puedan abrir todas las puertas en situaciones de emergencia.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/lockoverride.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/lockoverride","permalink":"/docs/es/platform/biostar_x/lockoverride","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/lockoverride.mdx","tags":[],"version":"current","frontMatter":{"id":"lockoverride","title":"Configurar permisos de apertura de emergencia","description":"Esta guía explica cómo otorgar permisos de apertura de emergencia a las credenciales de tarjeta para que usuarios específicos puedan abrir todas las puertas en situaciones de emergencia.","keywords":["Emergencia","Abierto","Acceso"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Migracion Visual Face","permalink":"/docs/es/platform/biostar_x/migration-face"},"next":{"title":"Monitorizar","permalink":"/docs/es/platform/biostar_x/how-to-guide-monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/lockoverride.mdx


const frontMatter = {
	id: 'lockoverride',
	title: 'Configurar permisos de apertura de emergencia',
	description: 'Esta guía explica cómo otorgar permisos de apertura de emergencia a las credenciales de tarjeta para que usuarios específicos puedan abrir todas las puertas en situaciones de emergencia.',
	keywords: [
		'Emergencia',
		'Abierto',
		'Acceso'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Antes de comenzar",
  "id": "antes-de-comenzar",
  "level": 2
}, {
  "value": "Configurar permisos de apertura de emergencia",
  "id": "configurar-permisos-de-apertura-de-emergencia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Configure permisos de apertura de emergencia para permitir que usuarios específicos accedan a todas las puertas en situaciones de emergencia. Si se abre una puerta con una tarjeta que tiene configurado el permiso de acceso de emergencia, la puerta permanece abierta y permite que cualquiera entre."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Primero agregue las credenciales de tarjeta antes de configurar los permisos de apertura de emergencia. Para obtener más información sobre cómo agregar credenciales de tarjeta, consulte ", (0,jsx_runtime.jsx)(_components.a, {
        href: "enroll-credential-card",
        children: "lo siguiente"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No se admiten credenciales distintas de las credenciales de tarjeta."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Se admiten todas las credenciales de tarjeta excepto las tarjetas inteligentes (AoC) y las tarjetas de acceso móvil ToM (ToM AoC)."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Según el dispositivo, es posible que la función de apertura de emergencia no esté admitida. Consulte los dispositivos y versiones de firmware compatibles a continuación."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Firmware BioStation 3 v1.4.0 o superior"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurar-permisos-de-apertura-de-emergencia",
      children: "Configurar permisos de apertura de emergencia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga doble clic en el usuario al que desea configurar permisos de apertura de emergencia en la lista de usuarios."
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Como alternativa, seleccione un usuario y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " en el perfil que se muestra en la pantalla derecha."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la pantalla de detalles del usuario, vaya a la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.title"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en la casilla de verificación del elemento ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.lockOverride"
          }), " para las credenciales de tarjeta que desea autorizar para la apertura de emergencia."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-credential-set-emergency-opening.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca un mensaje de advertencia, revise el contenido y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.continue"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-credential-set-emergency-opening-warning.png",
          width: "60%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete la configuración de los permisos de apertura de emergencia."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Los usuarios pueden abrir todas las puertas con una tarjeta de acceso configurada con permiso de emergencia."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Seleccione una o más credenciales de tarjeta para otorgar permiso de acceso de emergencia."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para revocar el permiso de acceso de emergencia, vuelva a hacer clic en la casilla de verificación del elemento ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.table.lockOverride"
            }), " de la credencial de tarjeta seleccionada."]
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