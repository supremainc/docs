"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["43945"], {
23100: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_common_mdx_6e8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-ui-common-mdx-6e8.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_common_mdx_6e8_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-common","title":"Aprender la interfaz de usuario común","description":"Esta guía describe la interfaz de usuario común de BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-common.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-common","permalink":"/docs/es/platform/biostar_x/ui-common","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-common.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-common","title":"Aprender la interfaz de usuario común","description":"Esta guía describe la interfaz de usuario común de BioStar X.","keywords":["IU"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Explorar la interfaz","permalink":"/docs/es/platform/biostar_x/ui-overview"},"next":{"title":"Usuario","permalink":"/docs/es/platform/biostar_x/ui-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-common.mdx


const frontMatter = {
	id: 'ui-common',
	title: 'Aprender la interfaz de usuario común',
	description: 'Esta guía describe la interfaz de usuario común de BioStar X.',
	keywords: [
		'IU'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Calloutlists, Cmd, IcAccount, IcHelp, IcInfo, IcLogout, IcSvTime, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAccount) _missingMdxReference("IcAccount", true);
  if (!IcHelp) _missingMdxReference("IcHelp", true);
  if (!IcInfo) _missingMdxReference("IcInfo", true);
  if (!IcLogout) _missingMdxReference("IcLogout", true);
  if (!IcSvTime) _missingMdxReference("IcSvTime", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["La interfaz de usuario (UI) de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " está diseñada para permitir que los usuarios naveguen y utilicen el sistema con facilidad. Este documento presenta los componentes comunes de la UI de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Comprenda la UI de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " y utilice el sistema con mayor eficiencia."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El área de encabezado de la pantalla se utiliza en todas las páginas y ofrece botones de enlace para acceder a varias funciones de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-header.png"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Logo de BioStar X"
            }), ": Botón de enlace que permite a los usuarios regresar a la página ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.launcher"
            }), " de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Accesos directos"
            }), ": Proporciona enlaces a las páginas principales que ofrece ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.action"
            }), ": Ejecuta la función ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "action"
            }), " configurada por el usuario del servidor. Al hacer clic en el botón se muestra la lista de acciones. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-custom-interface",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcSvTime, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hora del servidor"
            }), ": Compruebe la hora actual del servidor en ejecución de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ". Al pasar el mouse sobre el botón se muestra la hora actual del servidor."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcInfo, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Información"
            }), ": Verifique la información de versión de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " instalado."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcHelp, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ayuda"
            }), ": Botón de enlace que dirige a la página de ayuda de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcAccount, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cuenta"
            }), ": Ve a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.preferences.root"
            }), " o cambia la contraseña del usuario que inició sesión actualmente."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.menu.preferences.root"
                }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-preferences",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre cambiar la contraseña del usuario que inició sesión actualmente, consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "set-permission#changeLoginUserPassword",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcLogout, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cerrar sesión"
            }), ": Finaliza la sesión del usuario conectado y cierra la sesión."]
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