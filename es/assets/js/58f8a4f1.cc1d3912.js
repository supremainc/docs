"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["38275"], {
41991: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_custom_interface_mdx_58f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-custom-interface-mdx-58f.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_custom_interface_mdx_58f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-custom-interface","title":"Cómo usar la acción rápida","description":"Agregue el botón de Acción rápida a la pantalla principal.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-custom-interface.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-custom-interface","permalink":"/docs/es/platform/biostar_x/settings-custom-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-custom-interface.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-custom-interface","title":"Cómo usar la acción rápida","description":"Agregue el botón de Acción rápida a la pantalla principal.","keywords":["Acción Rápida","Interfaz Personalizada"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración de correo electrónico","permalink":"/docs/es/platform/biostar_x/settings-email-setting"},"next":{"title":"Configuración del servidor","permalink":"/docs/es/platform/biostar_x/settings-server"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-custom-interface.mdx


const frontMatter = {
	id: 'settings-custom-interface',
	title: 'Cómo usar la acción rápida',
	description: 'Agregue el botón de Acción rápida a la pantalla principal.',
	keywords: [
		'Acción Rápida',
		'Interfaz Personalizada'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar botón de Acción rápida",
  "id": "agregar-botón-de-acción-rápida",
  "level": 2
}, {
  "value": "Editar los botones de Acción rápida",
  "id": "editar-los-botones-de-acción-rápida",
  "level": 2
}, {
  "value": "Eliminar el botón de Acción rápida",
  "id": "eliminar-el-botón-de-acción-rápida",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcEditUL, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEditUL) _missingMdxReference("IcEditUL", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agregar un botón de Acción rápida en el menú ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.customInterface",
        product: "2"
      }), " permite controlar varios puntos de acceso a la vez al hacer clic en el botón de Acción rápida en la pantalla principal de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para agregar un ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.triggerAndAction",
          product: "2"
        }), " para Acción rápida, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-triger-and-action",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agregar-botón-de-acción-rápida",
      children: "Agregar botón de Acción rápida"
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
          children: ["En la barra lateral izquierda, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-custom-interface.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickActionLayout",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.customInterface.quickAction.add",
            product: "2"
          }), ", ingrese y configure cada elemento."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/settings-custom-interface-add-quick-action.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.operatorLevel",
                product: "2"
              }), ": Seleccione el ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.operatorLevel",
                product: "2"
              }), " que puede ejecutar la Acción rápida que desea agregar. Es posible seleccionar varias opciones."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.triggerAction",
                product: "2"
              }), ": Seleccione el ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.triggerAction",
                product: "2"
              }), " que se ejecutará. Es posible seleccionar varias opciones."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.confirmBeforeRun",
                product: "2"
              }), ": Si habilita esta opción, aparecerá una ventana de confirmación cuando presione el botón ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.quickAction",
                product: "2"
              }), " para preguntar si desea ejecutarlo."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " para guardar los ajustes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se creará el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.quickAction",
        product: "2"
      }), " agregado en el área del encabezado superior derecho de la pantalla de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.quickAction",
        product: "2"
      }), " creado para verificar que funcione según lo configurado en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.triggerAndAction",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/settings-custom-interface-main-quick-action.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Es posible agregar hasta cuatro botones ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.quickAction",
              product: "2"
            }), " en el área del encabezado superior de la pantalla. Permanece fijo para su uso en cualquier página."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los botones ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.quickAction",
              product: "2"
            }), " disponibles pueden variar según los ajustes configurados para el usuario ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.bioStarOperator",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editar-los-botones-de-acción-rápida",
      children: "Editar los botones de Acción rápida"
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
          children: ["En la barra lateral izquierda, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(IcEditUL, {}), " a la derecha del botón de Acción rápida que desea modificar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/settings-custom-interface-quick-action-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana emergente de edición, modifique el elemento deseado y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para guardar las modificaciones, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eliminar-el-botón-de-acción-rápida",
      children: "Eliminar el botón de Acción rápida"
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
          children: ["En la barra lateral izquierda, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(IcTrash2, {}), " a la derecha del botón de Acción rápida que desea eliminar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/settings-custom-interface-quick-action-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la ventana emergente de confirmación de eliminación, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/settings-custom-interface-confirm.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para aplicar los cambios, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
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