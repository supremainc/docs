"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["69948"], {
79980: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_authmode_mdx_702_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-authmode-mdx-702.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_authmode_mdx_702_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-authmode","title":"Configuración del modo de autenticación","description":"Configure el modo de autenticación predeterminado del dispositivo o un modo de autenticación privada individual para aplicar distintos métodos de autenticación a cada usuario.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-authmode.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-authmode","permalink":"/docs/es/platform/biostar_x/enroll-credential-authmode","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-authmode.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-authmode","title":"Configuración del modo de autenticación","description":"Configure el modo de autenticación predeterminado del dispositivo o un modo de autenticación privada individual para aplicar distintos métodos de autenticación a cada usuario.","keywords":["Modo de autenticación","Ajustes","Autenticación privada","Autenticación extendida","Valores predeterminados del dispositivo"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar nivel de seguridad","permalink":"/docs/es/platform/biostar_x/enroll-credential-securitylevel"},"next":{"title":"Registrar Dedo","permalink":"/docs/es/platform/biostar_x/enroll-credential-fingerprint"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-authmode.mdx


const frontMatter = {
	id: 'enroll-credential-authmode',
	title: 'Configuración del modo de autenticación',
	description: 'Configure el modo de autenticación predeterminado del dispositivo o un modo de autenticación privada individual para aplicar distintos métodos de autenticación a cada usuario.',
	keywords: [
		'Modo de autenticación',
		'Ajustes',
		'Autenticación privada',
		'Autenticación extendida',
		'Valores predeterminados del dispositivo'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Valores predeterminados del dispositivo",
  "id": "valores-predeterminados-del-dispositivo",
  "level": 2
}, {
  "value": "Modo de autenticación privada",
  "id": "modo-de-autenticación-privada",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Los usuarios pueden configurar los métodos de autenticación de manera flexible. Utilice el método de autenticación predeterminado configurado en el dispositivo o asigne modos de autenticación individuales adaptados a cada usuario. Además, el modo de autenticación extendida, que incluye autenticación facial y de huellas dactilares, mejora el nivel de seguridad."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "valores-predeterminados-del-dispositivo",
      children: "Valores predeterminados del dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configurar la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.authMode",
        product: "2"
      }), " en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.deviceDefault",
        product: "2"
      }), " permite la autenticación según el método configurado en el dispositivo."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-default.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modo-de-autenticación-privada",
      children: "Modo de autenticación privada"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configurar la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.authMode",
        product: "2"
      }), " en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.privateMode",
        product: "2"
      }), " permite diferentes métodos de autenticación para cada usuario."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-private.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " para abrir la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.addNewAuthMode",
        product: "2"
      }), ". Configure los métodos de autenticación deseados."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-private-add.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.authMode.toggle",
            product: "2"
          }), ": Configure si se utiliza el modo de autenticación extendida. El modo de autenticación extendida permite combinar los métodos de autenticación facial y de huellas dactilares."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.authMode",
            product: "2"
          }), ": Configure los métodos de autenticación mediante arrastrar y soltar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-authmod-private-join.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para inscribir los métodos de autenticación configurados, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.toggle",
              product: "2"
            }), " es compatible con FaceStation F2, BioStation 3 y BioEntry W3."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configurar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.includeDeviceDefaultAuthMode",
              product: "2"
            }), " permite utilizar tanto los modos de autenticación establecidos en el dispositivo como los modos de autenticación privados configurados en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-new-user-credential-authmod-note-image.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configurar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.excludeDeviceDefaultAuthMode",
              product: "2"
            }), " permite usar únicamente los modos de autenticación privados establecidos en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
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