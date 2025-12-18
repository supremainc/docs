"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["25988"], {
99981: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_securitylevel_mdx_939_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-securitylevel-mdx-939.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_securitylevel_mdx_939_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-securitylevel","title":"Configurar nivel de seguridad","description":"Otorgue niveles de seguridad independientes a los usuarios, independientemente del nivel de seguridad biométrico 1:N configurado en el dispositivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-securitylevel.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-securitylevel","permalink":"/docs/es/platform/biostar_x/enroll-credential-securitylevel","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-securitylevel.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-securitylevel","title":"Configurar nivel de seguridad","description":"Otorgue niveles de seguridad independientes a los usuarios, independientemente del nivel de seguridad biométrico 1:N configurado en el dispositivo.","keywords":["Credenciales","Seguridad","Nivel seguridad"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Registrar credencial del usuario","permalink":"/docs/es/platform/biostar_x/enroll-credential"},"next":{"title":"Configuración del modo de autenticación","permalink":"/docs/es/platform/biostar_x/enroll-credential-authmode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-securitylevel.mdx


const frontMatter = {
	id: 'enroll-credential-securitylevel',
	title: 'Configurar nivel de seguridad',
	description: 'Otorgue niveles de seguridad independientes a los usuarios, independientemente del nivel de seguridad biométrico 1:N configurado en el dispositivo.',
	keywords: [
		'Credenciales',
		'Seguridad',
		'Nivel seguridad'
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
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Otorgue niveles de seguridad independientes a los usuarios, independientemente del nivel de seguridad biométrico 1", ":N", " configurado en el dispositivo. Si los usuarios fallan con frecuencia la autenticación cuando el nivel de seguridad 1", ":N", " del dispositivo es alto, reduzca ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.fingerSecurityLevel",
        product: "2"
      }), " para mitigar las autenticaciones fallidas."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-securitylevle.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Establezca el nivel deseado en el campo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.fingerSecurityLevel",
        product: "2"
      }), ". Los valores disponibles son los siguientes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.deviceDefault",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.lowest",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.low",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.normal",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.high",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.highest",
          product: "2"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.save",
        product: "2"
      }), " en la esquina superior derecha de la pantalla para guardar la configuración."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si se establece ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.privateMode",
              product: "2"
            }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.credential",
              product: "2"
            }), " como ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.biometric",
              product: "2"
            }), ", no es posible aplicar el nivel de seguridad 1:1 porque el usuario ingresado no se puede identificar; el nivel de seguridad 1:1 solo se puede aplicar cuando en el modo de autenticación se configura una tarjeta o ID que permita identificar al usuario. Para obtener más información sobre ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.privateMode",
              product: "2"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "enroll-credential-authmode",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Establezca un nivel de seguridad apropiado. Un nivel de seguridad más alto puede dar como resultado tasas de autenticación de huella dactilar más bajas o ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../reference/glossary#frr",
              children: "tasas de rechazo falso (FRR)"
            }), " más altas."]
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