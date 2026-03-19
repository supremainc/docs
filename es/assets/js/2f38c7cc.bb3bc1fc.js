"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16339"], {
86185: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_elevator_add_edit_delete_mdx_2f3_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-elevator-add-edit-delete-mdx-2f3.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_elevator_add_edit_delete_mdx_2f3_namespaceObject = JSON.parse('{"id":"platform/biostar_air/elevator-add-edit-delete","title":"Administrar Elevadores","description":"Configure el control de acceso del ascensor para controlar el acceso a cada piso. Conecte el módulo OM-120 al dispositivo, configure los relés de los botones de cada piso y administre los horarios de acceso.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/elevator-add-edit-delete.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/elevator-add-edit-delete","permalink":"/docs/es/platform/biostar_air/elevator-add-edit-delete","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/elevator-add-edit-delete.mdx","tags":[],"version":"current","frontMatter":{"id":"elevator-add-edit-delete","title":"Administrar Elevadores","description":"Configure el control de acceso del ascensor para controlar el acceso a cada piso. Conecte el módulo OM-120 al dispositivo, configure los relés de los botones de cada piso y administre los horarios de acceso.","keywords":["Elevador","Control de acceso por piso","OM-120","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Ascensores","permalink":"/docs/es/platform/biostar_air/manage-elevator"},"next":{"title":"Establecer permisos de acceso por piso","permalink":"/docs/es/platform/biostar_air/elevator-set-floor-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/elevator-add-edit-delete.mdx


const frontMatter = {
	id: 'elevator-add-edit-delete',
	title: 'Administrar Elevadores',
	description: 'Configure el control de acceso del ascensor para controlar el acceso a cada piso. Conecte el módulo OM-120 al dispositivo, configure los relés de los botones de cada piso y administre los horarios de acceso.',
	keywords: [
		'Elevador',
		'Control de acceso por piso',
		'OM-120',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Requisitos",
  "id": "requisitos",
  "level": 2
}, {
  "value": "Conectar dispositivos y módulos",
  "id": "conectar-dispositivos-y-módulos",
  "level": 2
}, {
  "value": "Registrar ascensores",
  "id": "registrar-ascensores",
  "level": 2
}, {
  "value": "Editar elevadores",
  "id": "editar-elevadores",
  "level": 2
}, {
  "value": "Eliminar elevadores",
  "id": "eliminar-elevadores",
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
  }, {Cmd, DocLink, IcAirEdit, IcAirRemove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Para configurar el control de acceso del ascensor, primero conecte el módulo OM-120 al dispositivo de control de acceso. Luego, asigne el nombre y el número de relé de cada piso y restrinja los horarios de acceso por piso para mejorar la seguridad."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requisitos",
      children: "Requisitos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cumpla los siguientes requisitos para activar la función de control de acceso del ascensor."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://supremainc.com/en/hardware/pd_om-120.asp",
            children: "Suprema OM-120 module"
          }), ": Cada módulo admite hasta 12 pisos. Conectar hasta 12 módulos OM-120 a un único dispositivo de control de acceso permite controlar hasta 144 pisos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Se requiere un dispositivo compatible con BioStar Air que pueda conectarse al OM-120."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Se requiere un cableado adecuado al panel de control del ascensor. Para detalles sobre el cableado, contacte al fabricante del ascensor."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Los horarios de acceso por piso tienen prioridad, y la configuración de días festivos puede anular las reglas normales de acceso."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conectar-dispositivos-y-módulos",
      children: "Conectar dispositivos y módulos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en el dispositivo de control de acceso que tenga un módulo OM-120 en la lista de dispositivos."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "module_found_slots_title",
            product: "air"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-device-modules.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el módulo OM-120 conectado al dispositivo y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registrar-ascensores",
      children: "Registrar ascensores"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators.add_elevator_btn",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.title",
            product: "air"
          }), ", ingrese ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.device_info.field1",
            product: "air"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.device_info.field2",
            product: "air"
          }), " (opcional)."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.assign_device_and_modules.title",
            product: "air"
          }), ", seleccione el dispositivo y el módulo para la autenticación de acceso."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.assign_device_and_modules.field1",
                product: "air"
              }), ": Seleccione el dispositivo para la autenticación de acceso."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.assign_device_and_modules.field2",
                product: "air"
              }), ": Seleccione el módulo OM-120 que controlará el relé del botón del ascensor."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.assign_device_and_modules.field3",
                product: "air"
              }), ": Establezca el tiempo durante el cual el botón del piso permanecerá activo después de completar la autenticación. Tras ese tiempo, el relé dejará de activar el botón del piso."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.floors_configuration.title",
            product: "air"
          }), ", ingrese el número de pisos a controlar y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.floors_configuration.apply_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure el nombre, el número de relé y el horario de cada piso."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add-config-floor.png",
          alone: true,
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.floors_configuration.floors_table.column1",
                product: "air"
              }), ": Ingrese el nombre del piso. Use nombres fácilmente identificables como 1F, vestíbulo o sala de conferencias."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.floors_configuration.floors_table.column2",
                product: "air"
              }), ": Seleccione la salida de relé que corresponde a cada botón de piso en el panel de control del ascensor."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.floors_configuration.floors_table.column3",
                product: "air"
              }), ": Establezca el horario de acceso para cada piso. Por ejemplo, puede restringir el acceso al piso de mantenimiento fuera del horario laboral."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar y registrar la configuración del elevador."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Cada módulo OM-120 admite hasta 12 pisos. Conecte varios módulos OM-120 en cadena para ampliar hasta 144 pisos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "add_elevator.floors_configuration.title",
              product: "air"
            }), ", haga clic en ", (0,jsx_runtime.jsx)(IcAirRemove, {
              title: "Delete"
            }), " para eliminar un piso."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo registrar horarios, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-schedule"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editar-elevadores",
      children: "Editar elevadores"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga estos pasos para cambiar los detalles o la configuración de un elevador registrado."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la lista, haga clic en el elevador que desea editar. Como alternativa, seleccione la casilla del elevador y haga clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " en la parte superior de la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_elevator.title",
            product: "air"
          }), ", cambie la información necesaria o modifique la configuración."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-edit.png"
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
      id: "eliminar-elevadores",
      children: "Eliminar elevadores"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga estos pasos para eliminar un elevador registrado."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "En la lista, seleccione la casilla del elevador que desea eliminar. Puede seleccionar uno o varios elevadores."
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