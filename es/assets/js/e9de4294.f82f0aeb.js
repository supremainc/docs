"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["11806"], {
87133: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_card_manage_mdx_e9d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-credential-card-manage-mdx-e9d.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_card_manage_mdx_e9d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-card-manage","title":"Administrar tarjetas","description":"Esta guía explica cómo verificar el estado de emisión de tarjetas, cambiar el formato de datos de tarjetas Wiegand y gestionar el historial de eliminación de tarjetas móviles CSN.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-card-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-card-manage","permalink":"/docs/es/platform/biostar_x/settings-credential-card-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-card-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-card-manage","title":"Administrar tarjetas","description":"Esta guía explica cómo verificar el estado de emisión de tarjetas, cambiar el formato de datos de tarjetas Wiegand y gestionar el historial de eliminación de tarjetas móviles CSN.","keywords":["tarjeta","Gestionar"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Administrar credenciales","permalink":"/docs/es/platform/biostar_x/settings-credential-manage"},"next":{"title":"Configurar formato de tarjeta Wiegand","permalink":"/docs/es/platform/biostar_x/settings-credential-wiegand-format"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-card-manage.mdx


const frontMatter = {
	id: 'settings-credential-card-manage',
	title: 'Administrar tarjetas',
	description: 'Esta guía explica cómo verificar el estado de emisión de tarjetas, cambiar el formato de datos de tarjetas Wiegand y gestionar el historial de eliminación de tarjetas móviles CSN.',
	keywords: [
		'tarjeta',
		'Gestionar'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Gestión de tarjetas",
  "id": "gestión-de-tarjetas",
  "level": 2
}, {
  "value": "Cambiar formato de datos de tarjeta Wiegand",
  "id": "cambiar-formato-de-datos-de-tarjeta-wiegand",
  "level": 2
}, {
  "value": "Pautas para la gestión de eliminación de tarjetas móviles CSN",
  "id": "pautas-para-la-gestión-de-eliminación-de-tarjetas-móviles-csn",
  "level": 2
}, {
  "value": "Gestión separada de tarjetas móviles CSN eliminadas",
  "id": "gestión-separada-de-tarjetas-móviles-csn-eliminadas",
  "level": 3
}, {
  "value": "Evitar la reemisión de IDs de tarjetas eliminadas",
  "id": "evitar-la-reemisión-de-ids-de-tarjetas-eliminadas",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Puede verificar el estado de emisión de la tarjeta, cambiar el formato de datos de tarjetas Wiegand y gestionar el historial de eliminación de tarjetas móviles CSN."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gestión-de-tarjetas",
      children: "Gestión de tarjetas"
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
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.card"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Puede ver las tarjetas registradas en la pantalla de lista de tarjetas."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-card.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Haga clic en el estado de emisión en el lado izquierdo de la pantalla para filtrar por estado de emisión de la tarjeta. Los estados de emisión de tarjetas son los siguientes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.unassignedCard",
            product: "2"
          }), ": Tarjeta que no está asignada a ningún usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.assignedCard",
            product: "2"
          }), ": Tarjeta asignada a un usuario específico. Puede verificar el ID y el nombre del usuario asignado en la lista de tarjetas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.blacklistCard",
            product: "2"
          }), ": Tarjeta registrada en la lista negra. El titular de la tarjeta no puede autenticarse para acceder."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.deletedCsnMobileCard",
            product: "2"
          }), ": Tarjeta de acceso móvil eliminada."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si ha bloqueado la tarjeta de un usuario, puede consultar la información de la tarjeta en la lista ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.blacklistCard",
          product: "2"
        }), ". Para desbloquear, seleccione la tarjeta deseada y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unblocked",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cambiar-formato-de-datos-de-tarjeta-wiegand",
      children: "Cambiar formato de datos de tarjeta Wiegand"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie el formato de datos de tarjeta Wiegand en uso de forma simultánea."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "El cambio de formato de datos de las tarjetas ya asignadas a usuarios también se realizará, así que tenga precaución."
      })
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
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.card"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la parte superior derecha de la lista de tarjetas y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.more.changeDataFormat",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-change-card-type-btn.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.changeDataFormat.title",
            product: "2"
          }), ", seleccione el formato de datos de tarjeta que desea cambiar en la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.changeDataFormat.currentType",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-change-data-format.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el formato de datos de tarjeta deseado en la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.changeDataFormat.targetType",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " para cambiar el formato de datos de tarjeta."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pautas-para-la-gestión-de-eliminación-de-tarjetas-móviles-csn",
      children: "Pautas para la gestión de eliminación de tarjetas móviles CSN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al usar tarjetas móviles CSN integradas con el sitio regular de Airfob Portal en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", si un usuario elimina una tarjeta, el mismo ID de tarjeta podría volver a emitirse a otro usuario. Sin embargo, esto podría ocasionar que el titular original de la tarjeta aún pueda acceder a las instalaciones incluso después de que la tarjeta haya sido reemitida."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para solucionar este problema, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " ofrece la función de gestionar el historial de eliminación después de eliminar tarjetas móviles CSN."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gestión-separada-de-tarjetas-móviles-csn-eliminadas",
      children: "Gestión separada de tarjetas móviles CSN eliminadas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Las tarjetas móviles CSN eliminadas se registran en la lista ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.setting",
        product: "2"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.card",
        product: "2"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.deletedCsnMobileCard",
        product: "2"
      }), ". En esta lista, puede ver ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardType",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.cardList.th.cardFormat",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardId",
        product: "2"
      }), ", y ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.lastCardHolder",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-mobile-removed-card.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evitar-la-reemisión-de-ids-de-tarjetas-eliminadas",
      children: "Evitar la reemisión de IDs de tarjetas eliminadas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si existe un historial de eliminación de una tarjeta móvil CSN, el sistema impedirá que ese ID de tarjeta sea reemitido a otro usuario."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si desea emitir una tarjeta con un ID de tarjeta eliminado, solo podrá hacerlo después de excluir la tarjeta móvil CSN correspondiente de la lista ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.deletedCsnMobileCard",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-mobile-card-exclude.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Las tarjetas móviles CSN incluidas en la lista ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.deletedCsnMobileCard",
          product: "2"
        }), " no pueden eliminarse desde la lista ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unassignedCard",
          product: "2"
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para eliminar una tarjeta de la lista ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unassignedCard",
          product: "2"
        }), ", primero retire la tarjeta de la lista ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.deletedCsnMobileCard",
          product: "2"
        }), " y luego proceda con la eliminación."]
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