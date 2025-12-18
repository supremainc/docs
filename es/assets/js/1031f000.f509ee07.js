"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["46387"], {
63600: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Inicie sesión con la cuenta de administrador de ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " en la página ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.menu.license.root"
          }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.menu.license.biostarXLicense"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Ingrese ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.xlicense.activation",
            product: "2"
          }), " en secuencia con ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.xlicense.activatedBy",
            product: "2"
          }), " y ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.xlicense.activationKey",
            product: "2"
          }), "."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/biostarx-tutorial-license-online.png"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.server.license.button.activate",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Verifique las licencias registradas en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
        sid: "setting.xlicense.myLicense",
        product: "2"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Consulte ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "settings-license-biostar-x-license#registering-offline",
          children: "lo siguiente"
        }), " para activar su licencia en un entorno de red cerrado o en un estado sin conexión con acceso limitado a Internet."]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
59631: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_mdx_103_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-visitor-mdx-103.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_mdx_103_namespaceObject = JSON.parse('{"id":"platform/biostar_x/visitor","title":"Administrar visitantes","description":"Cree una página de solicitud de visitantes mediante el complemento de visitantes y gestione el acceso de visitantes.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/visitor","permalink":"/docs/es/platform/biostar_x/visitor","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/visitor.mdx","tags":[],"version":"current","frontMatter":{"id":"visitor","title":"Administrar visitantes","description":"Cree una página de solicitud de visitantes mediante el complemento de visitantes y gestione el acceso de visitantes.","keywords":["Visitas","Gestión de acceso"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar tiempo y asistencia","permalink":"/docs/es/platform/biostar_x/tna-settings"},"next":{"title":"Solicitar visita","permalink":"/docs/es/platform/biostar_x/visitor-register"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_bsx-license-apply.mdx
var _bsx_license_apply = __webpack_require__(63600);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor.mdx


const frontMatter = {
	id: 'visitor',
	title: 'Administrar visitantes',
	description: 'Cree una página de solicitud de visitantes mediante el complemento de visitantes y gestione el acceso de visitantes.',
	keywords: [
		'Visitas',
		'Gestión de acceso'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Aplicar la licencia de visitantes",
  "id": "aplicar-la-licencia-de-visitantes",
  "level": 2
}, ..._bsx_license_apply/* .toc */.RM, {
  "value": "Configuración de la página de solicitud de visitantes",
  "id": "configuración-de-la-página-de-solicitud-de-visitantes",
  "level": 2
}, {
  "value": "Gestión de acceso de visitantes",
  "id": "gestión-de-acceso-de-visitantes",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Utilice la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.visitor"
      }), " para crear una página de solicitud de visitantes en la PC de solicitudes y gestione el acceso de visitantes en la PC de administración."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.visitor"
            }), " está disponible con opciones adicionales en la licencia ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " o superior. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Después de activar la función de visitantes mediante la licencia, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor",
              children: "lo siguiente"
            }), " para obtener instrucciones detalladas de configuración."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aplicar-la-licencia-de-visitantes",
      children: "Aplicar la licencia de visitantes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Esta guía explica cómo aplicar la licencia de visitantes. Después de comprar la licencia ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.visitor",
        className: "normal"
      }), " al distribuidor de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", siga las instrucciones a continuación para aplicar la licencia."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_bsx_license_apply/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Aplicar la licencia de visitantes activa el menú ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.visitor",
          product: "2"
        }), ", y agrega un enlace a la página de gestión de ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.visitor"
        }), " en la lista de accesos directos en la esquina superior izquierda de la pantalla."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-de-la-página-de-solicitud-de-visitantes",
      children: "Configuración de la página de solicitud de visitantes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["La página de solicitud de visitantes puede usarse después de priorizar la configuración de visitantes. Consulte ", (0,jsx_runtime.jsx)(_components.a, {
        href: "settings-visitor",
        children: "lo siguiente"
      }), " para obtener instrucciones detalladas para configurar la página de solicitud de visitantes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se puede acceder a la página de solicitud de visitantes desde una PC dedicada a solicitudes, lo que permite a los visitantes enviar solicitudes de acceso. Para obtener más información sobre las solicitudes de visitantes, consulte ", (0,jsx_runtime.jsx)(_components.a, {
        href: "visitor-register",
        children: "lo siguiente"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-visitor-welcome-screen.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gestión-de-acceso-de-visitantes",
      children: "Gestión de acceso de visitantes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Verifique el historial de solicitudes de visitantes y gestione el acceso de visitantes. Para obtener más información sobre la gestión de acceso de visitantes, consulte ", (0,jsx_runtime.jsx)(_components.a, {
        href: "visitor-register-manage",
        children: "lo siguiente"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-visitor-manage.png"
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