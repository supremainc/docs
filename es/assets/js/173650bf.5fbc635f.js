"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["44176"], {
33335: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ manage_holiday_group_frontMatter),
  toc: () => (/* binding */ manage_holiday_group_toc),
  "default": () => (/* binding */ manage_holiday_group_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_holiday_group_mdx_173_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ manage_holiday_group_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-manage-holiday-group-mdx-173.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_holiday_group_mdx_173_namespaceObject = JSON.parse('{"id":"platform/biostar_air/manage-holiday-group","title":"Gestionar grupos de días festivos","description":"Agrupe los días festivos y asígnelos al control de acceso.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-holiday-group.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/manage-holiday-group","permalink":"/docs/es/platform/biostar_air/manage-holiday-group","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/manage-holiday-group.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-holiday-group","title":"Gestionar grupos de días festivos","description":"Agrupe los días festivos y asígnelos al control de acceso.","keywords":["Gestión de Acceso","Grupo de días festivos","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Permisos de acceso","permalink":"/docs/es/platform/biostar_air/manage-access-authority"},"next":{"title":"Administrar horarios","permalink":"/docs/es/platform/biostar_air/manage-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_add-holiday-group.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(_components.ol, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "access_menu",
          product: "air"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "holiday_groups_submenu",
          product: "air"
        }), " en la barra lateral izquierda."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "holiday_group_add_btn",
          product: "air"
        }), " en la esquina superior derecha de la pantalla."]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-holiday.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "holiday_group_add_title",
          product: "air"
        }), ", escribe el nombre del grupo."]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-holiday-add.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_holidays_title",
          product: "air"
        }), ", especifica el nombre y la fecha del feriado, y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_btn",
          product: "air"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Define el nombre y la fecha, y selecciona la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "holiday_group_checkbox_annually",
              product: "air"
            }), " para agregar un feriado público con fecha fija."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Define el nombre y la fecha, y selecciona la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "holiday_group_checkbox_duration",
              product: "air"
            }), " para feriados que se repiten anualmente y abarcan un período determinado."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Agrega otros feriados de la misma forma."
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-holiday-add-new-day.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "save_btn",
          product: "air"
        }), " para guardar la configuración del grupo de feriados."]
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


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-holiday-group.mdx


const manage_holiday_group_frontMatter = {
	id: 'manage-holiday-group',
	title: 'Gestionar grupos de días festivos',
	description: 'Agrupe los días festivos y asígnelos al control de acceso.',
	keywords: [
		'Gestión de Acceso',
		'Grupo de días festivos',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const manage_holiday_group_contentTitle = undefined;

const assets = {

};




const manage_holiday_group_toc = [{
  "value": "Agregar un grupo de días festivos",
  "id": "agregar-un-grupo-de-días-festivos",
  "level": 2
}, ...toc, {
  "value": "Editar un grupo de días festivos",
  "id": "editar-un-grupo-de-días-festivos",
  "level": 2
}, {
  "value": "Eliminar un grupo de días festivos",
  "id": "eliminar-un-grupo-de-días-festivos",
  "level": 2
}];
function manage_holiday_group_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirEdit, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) manage_holiday_group_missingMdxReference("Cmd", true);
  if (!IcAirEdit) manage_holiday_group_missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) manage_holiday_group_missingMdxReference("IcAirRemove", true);
  if (!Image) manage_holiday_group_missingMdxReference("Image", true);
  if (!YouTube) manage_holiday_group_missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "En BioStar Air, un grupo de días festivos sirve para ajustar las reglas de acceso en fechas o periodos específicos. Al configurar un grupo de días festivos, los administradores pueden restringir o modificar los permisos de acceso durante los días festivos o en fechas especiales. Este enfoque mantiene la seguridad a la vez que ofrece un control de acceso flexible."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Vea el siguiente video para obtener una guía sobre la gestión del control de acceso."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "IkTP75lCHN4"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agregar-un-grupo-de-días-festivos",
      children: "Agregar un grupo de días festivos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Un grupo de días festivos define los días festivos que se repiten anualmente y los que ocurren dentro de periodos específicos. Se utiliza para restringir o modificar los permisos de acceso durante esos periodos."
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los grupos de días festivos tienen prioridad sobre los horarios. Conceda acceso sin restricciones a los usuarios que siempre necesitan acceso."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Solo se puede aplicar un grupo de días festivos a una sola puerta."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editar-un-grupo-de-días-festivos",
      children: "Editar un grupo de días festivos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "holiday_groups_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el grupo de días festivos que desea editar en la lista. Alternativamente, seleccione la casilla del grupo de días festivos y, a continuación, haga clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " en la parte superior de la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_holiday_group_title",
            product: "air"
          }), ", edite los elementos necesarios."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-access-mng-holiday-edit.png"
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
      id: "eliminar-un-grupo-de-días-festivos",
      children: "Eliminar un grupo de días festivos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "holiday_groups_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione la casilla del grupo de días festivos en la lista. Puede seleccionar varios grupos de días festivos."
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
function manage_holiday_group_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(manage_holiday_group_createMdxContent, {
      ...props
    })
  }) : manage_holiday_group_createMdxContent(props);
}
function manage_holiday_group_missingMdxReference(id, component) {
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