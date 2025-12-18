"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["44251"], {
11749: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_area_mdx_1f4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-map-manage-area-mdx-1f4.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_area_mdx_1f4_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-map-manage-area","title":"Configurar área},{","description":"Completa la configuración de pisos e instalaciones para definir el área. Verifica las áreas seguras en el mapa.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-area.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-map-manage-area","permalink":"/docs/es/platform/biostar_x/settings-map-manage-area","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-map-manage-area.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-map-manage-area","title":"Configurar área},{","description":"Completa la configuración de pisos e instalaciones para definir el área. Verifica las áreas seguras en el mapa.","keywords":["Mapa","Zona","Planta","Instalación"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar instalación","permalink":"/docs/es/platform/biostar_x/settings-map-manage-facility"},"next":{"title":"Configurar visitante","permalink":"/docs/es/platform/biostar_x/settings-visitor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-area.mdx


const frontMatter = {
	id: 'settings-map-manage-area',
	title: 'Configurar área},{',
	description: 'Completa la configuración de pisos e instalaciones para definir el área. Verifica las áreas seguras en el mapa.',
	keywords: [
		'Mapa',
		'Zona',
		'Planta',
		'Instalación'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Añadir zona",
  "id": "add-area",
  "level": 2
}, {
  "value": "Editar zona",
  "id": "edit-area",
  "level": 2
}, {
  "value": "Restablecer zona",
  "id": "restablecer-zona",
  "level": 3
}, {
  "value": "Eliminar instalación/entrada/cámara",
  "id": "eliminar-instalaciónentradacámara",
  "level": 3
}, {
  "value": "Definir cobertura de la cámara",
  "id": "definir-cobertura-de-la-cámara",
  "level": 3
}, {
  "value": "Eliminar zona",
  "id": "eliminar-zona",
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
  }, {Cmd, DocLink, IcCurP, IcFremove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcCurP) _missingMdxReference("IcCurP", true);
  if (!IcFremove) _missingMdxReference("IcFremove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Completa la configuración de pisos e instalaciones para definir el área. Verifica las áreas seguras en el mapa. La configuración de zonas permite acceder y supervisar las instalaciones y los pisos de la zona correspondiente en la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-open-map.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Registra pisos e instalaciones antes de configurar las zonas. Para obtener más información sobre cómo registrar pisos e instalaciones, consulta lo siguiente:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-map-manage-floor"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-map-manage-facility"
              }), "\n"]
            }), "\n"]
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
      id: "add-area",
      children: "Añadir zona"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura y administra las zonas de las áreas de seguridad que gestionas actualmente mediante el mapa."
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
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.area"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.table.action.newArea"
          }), " en la parte superior derecha de la pantalla de lista de áreas."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-area.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingresa el nombre y la descripción del área que deseas añadir en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.information.section.title"
          }), " de la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.page.title"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Define la ubicación de la zona que vas a añadir en el mapa, en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.configuration.section.title"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic derecho en el mapa y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.setArea"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Define la zona con la forma deseada. Haz clic para comenzar a dibujar y arrastra para definir la zona."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-drawing.gif",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para restablecer el área, debes eliminar la zona configurada. Para eliminar el área, haz clic en ", (0,jsx_runtime.jsx)(IcFremove, {}), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para añadir instalaciones al área configurada, haz clic derecho y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "map.menu.add.facility"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-02.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "Al añadir una zona, debes configurar al menos una instalación, entrada o cámara."
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para añadir una entrada, haz clic derecho y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.area.label.addDoor"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para añadir una cámara, haz clic derecho y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.area.label.addCamera"
                }), "."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.addFacility"
          }), ", selecciona la instalación que deseas añadir y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-03.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al añadir una entrada o una cámara, también aparecerá la ventana ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.area.label.addDoor"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.area.label.addCamera"
            }), ". Selecciona el elemento que quieres añadir y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.apply"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez completada la configuración del área, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Busca la ubicación deseada usando el campo de entrada en la parte superior izquierda del mapa. Haz clic en ", (0,jsx_runtime.jsx)(IcCurP, {}), " para volver a la ubicación actual."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-map-area-find-point.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Al añadir una zona en el mapa, solo puede establecerse como un único polígono. Al definir una zona, asegúrate de que los puntos de inicio y fin sean los mismos. Una vez configurada, la forma de la zona no se puede cambiar. Para modificar la zona, debes eliminarla y volver a añadirla."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las posiciones de las instalaciones, entradas y cámaras añadidas pueden cambiarse mediante arrastrar y soltar en el mapa."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-area",
      children: "Editar zona"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elimina y reconfigura zonas existentes o añade o elimina instalaciones, entradas y cámaras."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restablecer-zona",
      children: "Restablecer zona"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para restablecer una zona en el mapa, debes eliminar la zona existente y volver a añadirla."
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
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.area"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona la zona que deseas restablecer de la lista de zonas."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En el mapa, en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.configuration.section.title"
          }), ", haz clic en ", (0,jsx_runtime.jsx)(IcFremove, {}), " en la esquina superior izquierda del área ya creada."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-reset.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic derecho en el mapa y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.setArea"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para definir el área como desees y guardar, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eliminar-instalaciónentradacámara",
      children: "Eliminar instalación/entrada/cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en la instalación, entrada o cámara que quieras eliminar en el mapa. Aparecerá el ícono ", (0,jsx_runtime.jsx)(IcFremove, {}), ". Haz clic en el ícono para eliminar la instalación seleccionada."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-area-x-btn.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definir-cobertura-de-la-cámara",
      children: "Definir cobertura de la cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define el área de cobertura de la cámara en el mapa. Haz clic derecho en el ícono donde está ubicada la cámara y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.area.button.addCoverage"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-area-camera-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para cambiar el rango de disparo, haz clic y arrastra el rango de la zona verde en la dirección deseada."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-camera-rot.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para ajustar el área de cobertura, sujeta el borde del rango y arrastra para redimensionar."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-camera-adjust.png",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eliminar-zona",
      children: "Eliminar zona"
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
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.area"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Marca la casilla de la zona que deseas eliminar en la lista de zonas."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-remove-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensaje de confirmación, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.yes"
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