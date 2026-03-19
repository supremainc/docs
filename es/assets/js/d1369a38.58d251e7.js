"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["28391"], {
18974: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ manage_schedule_frontMatter),
  toc: () => (/* binding */ manage_schedule_toc),
  "default": () => (/* binding */ manage_schedule_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_schedule_mdx_d13_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ manage_schedule_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-manage-schedule-mdx-d13.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_schedule_mdx_d13_namespaceObject = JSON.parse('{"id":"platform/biostar_air/manage-schedule","title":"Administrar horarios","description":"Crear y administrar horarios para controlar el acceso a puertas y ascensores en BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-schedule.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/manage-schedule","permalink":"/docs/es/platform/biostar_air/manage-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/manage-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-schedule","title":"Administrar horarios","description":"Crear y administrar horarios para controlar el acceso a puertas y ascensores en BioStar Air.","keywords":["Horario","Gestionar","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Gestionar grupos de días festivos","permalink":"/docs/es/platform/biostar_air/manage-holiday-group"},"next":{"title":"Administrar Niveles de Acceso","permalink":"/docs/es/platform/biostar_air/manage-access-level"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_add-schedule-item.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
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
        children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "access_menu",
          product: "air"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedules_submenu",
          product: "air"
        }), " en la barra lateral izquierda."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_add_title",
          product: "air"
        }), " en la esquina superior derecha de la pantalla."]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-schedule.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_add_title",
          product: "air"
        }), ", ingresa ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_name",
          product: "air"
        }), " y ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_description",
          product: "air"
        }), " (opcional)."]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-schedule-add.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_section_title_time_intervals",
          product: "air"
        }), ", selecciona los días y los intervalos de tiempo."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona de lunes a viernes, de 9:00 a.m. a 6:00 p.m., para definir el horario laboral. Selecciona sábado y domingo, o de 6:00 p.m. a 9:00 a.m. todos los días, para definir un horario fuera de horario laboral."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_btn",
          product: "air"
        }), " para aplicar el horario seleccionado."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_section_title_holiday_time",
          product: "air"
        }), ", selecciona el grupo de días festivos que se aplicará al horario y establece los intervalos de tiempo."]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-schedule-add-holiday-group.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_btn",
          product: "air"
        }), " para aplicar el grupo de días festivos."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "save_btn",
          product: "air"
        }), " para agregar el horario."]
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


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-schedule.mdx


const manage_schedule_frontMatter = {
	id: 'manage-schedule',
	title: 'Administrar horarios',
	description: 'Crear y administrar horarios para controlar el acceso a puertas y ascensores en BioStar Air.',
	keywords: [
		'Horario',
		'Gestionar',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const manage_schedule_contentTitle = undefined;

const assets = {

};




const manage_schedule_toc = [{
  "value": "Agregar horario",
  "id": "addSchedule",
  "level": 2
}, ...toc, {
  "value": "Editar horario",
  "id": "editSchedule",
  "level": 2
}, {
  "value": "Eliminar horario",
  "id": "deleteSchedule",
  "level": 2
}];
function manage_schedule_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirEdit, IcAirRemove, Image} = _components;
  if (!Cmd) manage_schedule_missingMdxReference("Cmd", true);
  if (!DocLink) manage_schedule_missingMdxReference("DocLink", true);
  if (!IcAirEdit) manage_schedule_missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) manage_schedule_missingMdxReference("IcAirRemove", true);
  if (!Image) manage_schedule_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Crear horarios para permitir o restringir el acceso a puertas o ascensores en días y períodos de tiempo específicos. Úselos junto con grupos de días festivos para ajustar las reglas de acceso."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los grupos de días festivos tienen prioridad sobre los horarios. Conceda acceso sin restricciones a los usuarios que siempre necesitan acceso."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración de grupos de días festivos, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-holiday-group"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo aplicar horarios a puertas, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/managing-door-schedules"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo configurar horarios para controlar el acceso a cada piso del ascensor, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-elevator"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addSchedule",
      children: "Agregar horario"
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Agregue horarios abiertos para permitir el acceso y horarios cerrados para restringirlo, y aplíquelos a las puertas. Para obtener más información sobre cómo aplicar horarios a puertas, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/managing-door-schedules"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo configurar horarios para controlar el acceso a cada piso del ascensor, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-elevator"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editSchedule",
      children: "Editar horario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el horario que desea editar en la lista. Alternativamente, seleccione la casilla del horario y haga clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " en la parte superior de la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_edit_title",
            product: "air"
          }), ", actualice la información requerida o modifique el horario."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-access-mng-schedule-edit.png"
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
      id: "deleteSchedule",
      children: "Eliminar horario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione la casilla del horario que desea eliminar en la lista. Seleccione uno o más horarios."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Al eliminar un horario, este se quita de todas las secciones relacionadas. Por ejemplo, si se elimina un horario aplicado a una puerta o a un ascensor, ya no se aplicará a esa puerta o a ese ascensor."
      })
    })]
  });
}
function manage_schedule_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(manage_schedule_createMdxContent, {
      ...props
    })
  }) : manage_schedule_createMdxContent(props);
}
function manage_schedule_missingMdxReference(id, component) {
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