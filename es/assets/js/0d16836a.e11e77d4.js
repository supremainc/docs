"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49567"], {
91061: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ manage_access_level_frontMatter),
  toc: () => (/* binding */ manage_access_level_toc),
  "default": () => (/* binding */ manage_access_level_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_access_level_mdx_0d1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ manage_access_level_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-manage-access-level-mdx-0d1.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_access_level_mdx_0d1_namespaceObject = JSON.parse('{"id":"platform/biostar_air/manage-access-level","title":"Administrar Niveles de Acceso","description":"Crear y administrar niveles de acceso en BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-access-level.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/manage-access-level","permalink":"/docs/es/platform/biostar_air/manage-access-level","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/manage-access-level.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-access-level","title":"Administrar Niveles de Acceso","description":"Crear y administrar niveles de acceso en BioStar Air.","keywords":["nivel de acceso","Gestionar","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Administrar horarios","permalink":"/docs/es/platform/biostar_air/manage-schedule"},"next":{"title":"Gestionar Niveles de Piso","permalink":"/docs/es/platform/biostar_air/manage-floor-level"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_add-access-level.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(_components.ol, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "access_menu",
          product: "air"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "access_levels_submenu",
          product: "air"
        }), " en la barra lateral izquierda."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_access_level",
          product: "air"
        }), " en la esquina superior derecha de la pantalla."]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-ac-level.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_access_level",
          product: "air"
        }), ", ingrese ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_name",
          product: "air"
        }), " y ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_description",
          product: "air"
        }), " (opcional)."]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-ac-level-add.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "access_level_drawler_title_add_door_group",
          product: "air"
        }), " o ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "access_level_drawler_title_individual_door",
          product: "air"
        }), ", seleccione grupos de puertas o puertas individuales."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedules_title",
          product: "air"
        }), ", seleccione el horario que se aplicará al nivel de acceso. Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "always_schedule",
          product: "air"
        }), " para permitir acceso sin restricciones."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "save_btn",
          product: "air"
        }), " para agregar el nivel de acceso."]
      }), "\n"]
    }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-access-level.mdx


const manage_access_level_frontMatter = {
	id: 'manage-access-level',
	title: 'Administrar Niveles de Acceso',
	description: 'Crear y administrar niveles de acceso en BioStar Air.',
	keywords: [
		'nivel de acceso',
		'Gestionar',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const manage_access_level_contentTitle = undefined;

const assets = {

};




const manage_access_level_toc = [{
  "value": "Agregar nivel de acceso",
  "id": "addAccessLevel",
  "level": 2
}, ...toc, {
  "value": "Modificar nivel de acceso",
  "id": "editAccessLevel",
  "level": 2
}, {
  "value": "Eliminar nivel de acceso",
  "id": "deleteAccessLevel",
  "level": 2
}];
function manage_access_level_createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirEdit, IcAirRemove, Image} = _components;
  if (!Cmd) manage_access_level_missingMdxReference("Cmd", true);
  if (!IcAirEdit) manage_access_level_missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) manage_access_level_missingMdxReference("IcAirRemove", true);
  if (!Image) manage_access_level_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice los niveles de acceso para controlar con precisión el acceso de los usuarios. Los niveles de acceso definen quién puede acceder, dónde y cuándo. Un nivel de acceso consta de los siguientes elementos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Puerta"
          }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "grupo de puertas"
          }), ": Ubicación donde se permite el acceso"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Horario"
          }), ": Período en el que se permite el acceso"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Grupo de días festivos"
          }), ": Fechas o períodos que restringen o ajustan el acceso"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure los niveles de acceso antes de agregar usuarios para agilizar la gestión de usuarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addAccessLevel",
      children: "Agregar nivel de acceso"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice los niveles de acceso para establecer permisos de usuario según la puerta, el horario y el grupo de días festivos."
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editAccessLevel",
      children: "Modificar nivel de acceso"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el nivel de acceso que desea modificar en la lista de niveles de acceso. Alternativamente, seleccione la casilla del nivel de acceso que desea modificar y haga clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " en la parte superior de la lista."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-access-mng-ac-level-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_access_level",
            product: "air"
          }), ", edite la información requerida o cambie la configuración."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteAccessLevel",
      children: "Eliminar nivel de acceso"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Marque la casilla del nivel de acceso que desea eliminar en la lista de niveles de acceso. Puede seleccionar más de un nivel de acceso."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " en la parte superior de la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca un mensaje de advertencia, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_yes",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function manage_access_level_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(manage_access_level_createMdxContent, {
      ...props
    })
  }) : manage_access_level_createMdxContent(props);
}
function manage_access_level_missingMdxReference(id, component) {
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