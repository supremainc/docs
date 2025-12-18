"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["28065"], {
6429: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_control_elevator_mdx_173_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-control-elevator-mdx-173.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_control_elevator_mdx_173_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-elevator","title":"Controlar ascensores","description":"Controle los ascensores y verifique información detallada.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/control-elevator.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-elevator","permalink":"/docs/es/platform/biostar_x/control-elevator","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-elevator.mdx","tags":[],"version":"current","frontMatter":{"id":"control-elevator","title":"Controlar ascensores","description":"Controle los ascensores y verifique información detallada.","keywords":["Monitorizar","Elevador"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Controlar dispositivos esclavos","permalink":"/docs/es/platform/biostar_x/control-door-slave-device"},"next":{"title":"Gestionar el control de acceso avanzado","permalink":"/docs/es/platform/biostar_x/control-zone"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/control-elevator.mdx


const frontMatter = {
	id: 'control-elevator',
	title: 'Controlar ascensores',
	description: 'Controle los ascensores y verifique información detallada.',
	keywords: [
		'Monitorizar',
		'Elevador'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Controlar ascensores",
  "id": "controlar-ascensores",
  "level": 2
}, {
  "value": "Borrar alarma",
  "id": "clear-alarm",
  "level": 3
}, {
  "value": "Ver detalles",
  "id": "detail-view",
  "level": 3
}, {
  "value": "Control de acceso a pisos",
  "id": "floor-access-control",
  "level": 2
}, {
  "value": "Abrir piso",
  "id": "floor-open",
  "level": 3
}, {
  "value": "Normalizar piso",
  "id": "floor-unlock",
  "level": 3
}, {
  "value": "Bloquear piso",
  "id": "floor-lock",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía describe cómo controlar el ascensor. Controle el ascensor o verifique información detallada mediante las funciones proporcionadas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " o seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " en la lista de accesos directos en la esquina superior izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " de la barra lateral izquierda, vaya a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allElevatorGroups"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione el ascensor en el grupo deseado y haga clic con el botón derecho. Seleccione la función deseada en el menú emergente."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener información sobre cómo configurar el ascensor y los grupos, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-elevators",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "controlar-ascensores",
      children: "Controlar ascensores"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reconozca o verifique detalles de las alarmas activadas por el ascensor."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-elevator-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clear-alarm",
      children: "Borrar alarma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Desactive la alarma que se produjo en este ascensor. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " en el menú emergente. Un mensaje de finalización aparece en la esquina superior derecha de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detail-view",
      children: "Ver detalles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Verifique información detallada sobre el ascensor y el historial de eventos. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " en el menú emergente. La información detallada y el historial de eventos del ascensor aparecen en el lado derecho de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-elevator-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ver detalles"
          }), ": Verifique el nombre, la ubicación, la información de estado y más del ascensor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), ": Verifique la lista de eventos recientes que ocurrió en el ascensor seleccionado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener información sobre cada elemento de la sección de detalles del ascensor, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-elevators-add",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "floor-access-control",
      children: "Control de acceso a pisos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controle los pisos a los que se puede acceder desde el ascensor. Haga clic en el relé del piso configurado en el ascensor y haga clic con el botón derecho. Seleccione la función deseada en el menú emergente."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-elevator-floor-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-open",
      children: "Abrir piso"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cualquier persona puede acceder al piso abierto. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.unlock"
      }), " en el menú emergente y seleccione la opción deseada."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockOnce"
          }), ": Abre el piso una vez."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockPermanent"
          }), ": Abre el piso sin restricciones de tiempo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["El piso puede abrirse temporalmente para la comodidad de los visitantes externos cuando lleguen. Después de abrir el piso, cambie al modo ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-unlock",
      children: "Normalizar piso"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al cambiar el piso al estado ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), ", solo los usuarios autorizados podrán acceder. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-lock",
      children: "Bloquear piso"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al cambiar el piso al estado ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), ", se evitará el acceso de cualquier persona. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " en el menú emergente."]
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