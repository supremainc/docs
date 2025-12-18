"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["42374"], {
43635: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_floor_mdx_5aa_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-map-manage-floor-mdx-5aa.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_floor_mdx_5aa_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-map-manage-floor","title":"Configurar pisos","description":"Configura los pisos antes de configurar zonas y instalaciones. Coloca puertas y cámaras en la imagen del piso para confirmación visual.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-floor.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-map-manage-floor","permalink":"/docs/es/platform/biostar_x/settings-map-manage-floor","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-map-manage-floor.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-map-manage-floor","title":"Configurar pisos","description":"Configura los pisos antes de configurar zonas y instalaciones. Coloca puertas y cámaras en la imagen del piso para confirmación visual.","keywords":["Mapa","Planta","Instalación","Puerta","Cámara","Plantilla","Imágenes"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Administrar mapa","permalink":"/docs/es/platform/biostar_x/settings-map-management"},"next":{"title":"Configurar instalación","permalink":"/docs/es/platform/biostar_x/settings-map-manage-facility"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-floor.mdx


const frontMatter = {
	id: 'settings-map-manage-floor',
	title: 'Configurar pisos',
	description: 'Configura los pisos antes de configurar zonas y instalaciones. Coloca puertas y cámaras en la imagen del piso para confirmación visual.',
	keywords: [
		'Mapa',
		'Planta',
		'Instalación',
		'Puerta',
		'Cámara',
		'Plantilla',
		'Imágenes'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar piso",
  "id": "add-floor",
  "level": 2
}, {
  "value": "Modificar configuración del piso",
  "id": "modificar-configuración-del-piso",
  "level": 2
}, {
  "value": "Eliminar puerta/cámara",
  "id": "eliminar-puertacámara",
  "level": 3
}, {
  "value": "Configurar rango de captura de la cámara",
  "id": "configurar-rango-de-captura-de-la-cámara",
  "level": 3
}, {
  "value": "Eliminar imagen del piso",
  "id": "eliminar-imagen-del-piso",
  "level": 3
}, {
  "value": "Eliminar piso",
  "id": "delete-floor",
  "level": 2
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
  }, {Cmd, IcCrop, IcFremove, IcLrot, IcRrot, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCrop) _missingMdxReference("IcCrop", true);
  if (!IcFremove) _missingMdxReference("IcFremove", true);
  if (!IcLrot) _missingMdxReference("IcLrot", true);
  if (!IcRrot) _missingMdxReference("IcRrot", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configura los pisos antes de configurar zonas y instalaciones. Carga el plano del piso como imagen y coloca puertas y cámaras para la gestión visual. Después de configurar un piso, verifica las puertas y cámaras de ese piso en la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-settings-map-add-floor-example.png",
      alone: true,
      caption: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Registra puertas antes de configurar pisos. Para obtener más información sobre el registro de puertas, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-door-add",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre el monitoreo de mapas, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-map",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Las opciones de configuración de mapas y la función de monitoreo de mapas pueden utilizarse mediante opciones adicionales con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "avanzada"
            }), " o superior. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-floor",
      children: "Agregar piso"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Carga un plano del piso o una imagen 3D en vista aérea para agregar un piso y colocar puertas y cámaras."
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
          children: ["En la barra lateral izquierda, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.floor"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.table.actions.newFloor"
          }), " en la esquina superior derecha de la pantalla de lista de pisos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingresa el nombre y la descripción del piso que deseas agregar en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.information.section.title"
          }), " de la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.page.title"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.button.floorPlan"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.section.title"
          }), " o arrastra y suelta la imagen para cargarla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Confirma la imagen cargada en la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addFloorPlan"
          }), " y continúa con la configuración."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-01.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para rotar la imagen, haz clic en ", (0,jsx_runtime.jsx)(IcLrot, {}), " o ", (0,jsx_runtime.jsx)(IcRrot, {}), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para recortar la imagen, haz clic en ", (0,jsx_runtime.jsx)(IcCrop, {}), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de completar la configuración de la imagen, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para agregar una puerta a la imagen cargada en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.section.title"
          }), ", haz clic derecho en la ubicación deseada de la imagen y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addDoor"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addDoor"
          }), ", selecciona una de las puertas registradas."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-03.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para colocar la puerta en la imagen, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-04.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para agregar una cámara a la imagen cargada, haz clic derecho en la ubicación deseada de la imagen y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addCamera"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addCamera"
          }), ", selecciona una de las cámaras registradas."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-05.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para colocar la cámara en la imagen, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-06.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Coloca puertas y cámaras adicionales según sea necesario en el piso real."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para guardar la configuración del piso, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " después de completar todos los ajustes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Para cambiar la posición de las puertas y cámaras colocadas en el piso, haz clic y arrastra la puerta o cámara correspondiente hasta la ubicación deseada."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre los íconos y el estado de las puertas y cámaras colocadas en el piso, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-map#component-and-options",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modificar-configuración-del-piso",
      children: "Modificar configuración del piso"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puedes modificar el diseño del piso con las puertas y cámaras añadidas. Al modificar el diseño del piso, puedes cambiar o eliminar las posiciones de puertas y cámaras."
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
          children: ["En la barra lateral izquierda, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.floor"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haz clic en el piso que deseas modificar de la lista."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Después de completar todos los ajustes y guardar el piso configurado, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.apply"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eliminar-puertacámara",
      children: "Eliminar puerta/cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en el ícono ", (0,jsx_runtime.jsx)(IcFremove, {}), " de la puerta o cámara que deseas eliminar de la imagen del piso. Puedes eliminar la puerta o cámara correspondiente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-rango-de-captura-de-la-cámara",
      children: "Configurar rango de captura de la cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic derecho en la cámara a la que deseas ajustar el rango de captura en la imagen del piso. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.area.button.addCoverage"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-floor-add-camera-coverage.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para cambiar el rango de captura, mueve el puntero del mouse dentro del área verde. Cuando el puntero del mouse cambie a forma de cruz, haz clic y arrastra hasta la ubicación deseada manteniendo presionado el botón del mouse."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-floor-camera-rotation.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para ajustar el área de cobertura, sujeta el borde del rango y arrastra para redimensionar."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-floor-camera-adjust.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para eliminar el área de cobertura, haz clic en el ícono ", (0,jsx_runtime.jsx)(IcFremove, {}), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Los ajustes realizados por el usuario son solo funciones proporcionadas para la comodidad de la gestión de seguridad y no reflejan el rango de captura real de la cámara."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eliminar-imagen-del-piso",
      children: "Eliminar imagen del piso"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para eliminar la imagen del piso, haz clic derecho sobre la imagen del piso y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.floor.contextMenu.deleteFloor"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-remove-floor.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-floor",
      children: "Eliminar piso"
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
          children: ["En la barra lateral izquierda, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.floor"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Marca la casilla del piso que deseas eliminar de la lista. Puedes seleccionar más de un piso."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-remove-floor-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los pisos seleccionados se eliminarán de la lista. Los pisos eliminados no se pueden recuperar."
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