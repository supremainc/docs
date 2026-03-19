"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["90380"], {
70002: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_ta_mdx_730_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-configuring-ta-mdx-730.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_ta_mdx_730_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-ta","title":"Tiempo y asistencia (T&A)","description":"Esta guía explica cómo configurar los ajustes de T&A en BioStar Air, habilitar el registro móvil de T&A, asignar T&A a dispositivos y exportar los registros de T&A.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-ta.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-ta","permalink":"/docs/es/platform/biostar_air/configuring-ta","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/configuring-ta.mdx","tags":[],"version":"current","frontMatter":{"id":"configuring-ta","title":"Tiempo y asistencia (T&A)","description":"Esta guía explica cómo configurar los ajustes de T&A en BioStar Air, habilitar el registro móvil de T&A, asignar T&A a dispositivos y exportar los registros de T&A.","keywords":["T&A","T&A (Tiempo y Asistencia)","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Formato de tarjeta Wiegand personalizado","permalink":"/docs/es/platform/biostar_air/custom-wiegand-card-formats"},"next":{"title":"Informe de tiempo y asistencia","permalink":"/docs/es/platform/biostar_air/reports-time-attendance-reports"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-ta.mdx


const frontMatter = {
	id: 'configuring-ta',
	title: 'Tiempo y asistencia (T&A)',
	description: 'Esta guía explica cómo configurar los ajustes de T&A en BioStar Air, habilitar el registro móvil de T&A, asignar T&A a dispositivos y exportar los registros de T&A.',
	keywords: [
		'T&A',
		'T&A (Tiempo y Asistencia)',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Eventos de T&amp;A",
  "id": "tna_events",
  "level": 2
}, {
  "value": "Configurar T&amp;A",
  "id": "settingTna",
  "level": 2
}, {
  "value": "Configurar T&amp;A en dispositivos",
  "id": "configuringTnaDevices",
  "level": 2
}, {
  "value": "Ver y exportar registros de T&amp;A",
  "id": "viewing-and-exporting-t-and-a-logs",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirColumn, IcAirDown, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirColumn) _missingMdxReference("IcAirColumn", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Air registra los horarios de inicio y fin de turno y de descanso para ofrecer un seguimiento básico de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T&A"
      }), ", e integrarse con sistemas externos de T&A o exportar los datos. BioStar Air no es un sistema completo de T&A, pero admite el registro de eventos y la integración mediante API con sistemas de nómina y T&A. También genera informes básicos de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "horas trabajadas"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Consulta el siguiente video para ver una guía sobre la configuración de T&A."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "Que_LV25W04"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tna_events",
      children: "Eventos de T&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A continuación se indican los eventos de T&A que se pueden registrar. Estos eventos se guardan y pueden exportarse como un archivo CSV o recuperarse mediante la API."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Inicio del turno"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fin del turno"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Inicio del descanso"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fin del descanso"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingTna",
      children: "Configurar T&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sigue estos pasos para habilitar y configurar los ajustes de T&A."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_tab_setting",
            product: "air"
          }), " en la parte superior de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-tab-settings.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Activa ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input8",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensajes, haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_settings_confirm_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input8",
            product: "air"
          }), ", haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-tab-settings-enable-tna.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input8",
            product: "air"
          }), ", establece la etiqueta para ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_table_head1",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Por ejemplo: Inicio del turno, Fin del turno, Inicio del descanso, Fin del descanso"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-tab-settings-tna-mng.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona si el tipo de evento para ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_table_head1",
            product: "air"
          }), " es ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entrada"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Salida"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuringTnaDevices",
      children: "Configurar T&A en dispositivos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tras activar ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_profile_input8",
        product: "air"
      }), ", especifica los dispositivos que lo usarán."]
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
          children: "En la lista de dispositivos, haz clic en el dispositivo que deseas configurar para T&A."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_title",
            product: "air"
          }), ", ve a la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_device_edit_tna_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-device-set-tna.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el interruptor ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_device_edit_tna_toogle",
            product: "air"
          }), " para habilitar T&A."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_edit_tna_mode_label",
              product: "air"
            }), " esté configurado en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_edit_tna_mode_option6",
              product: "air"
            }), ", la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_edit_tna_mobile_required_label",
              product: "air"
            }), " estará disponible para la selección obligatoria de T&A durante la autenticación de acceso."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Las etiquetas de eventos de T&A se gestionan a nivel de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "sitio"
            }), " y no se pueden cambiar por dispositivo."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device_edit_tna_title",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_edit_tna_mode_label",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Un dispositivo registra eventos de T&A de distintas maneras. Selecciona el modo de asistencia deseado en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_edit_tna_mode_label",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_option2",
            product: "air"
          }), ": Cuando la tecla de asistencia aparece en la pantalla, el usuario selecciona el evento de asistencia al autenticarse."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_option3",
            product: "air"
          }), ": Registra las horas de entrada y salida según el horario definido. Por ejemplo, los eventos entre las 8:00 a. m. y las 12:00 p. m. se registran como ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entrada"
          }), ", mientras que los eventos entre la 1:00 p. m. y las 5:00 p. m. se registran como ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Salida"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_option4",
            product: "air"
          }), ": El usuario continúa usando el último evento de asistencia seleccionado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_option5",
            product: "air"
          }), ": Asigna un código de T&A fijo al dispositivo. Cada autenticación en ese dispositivo registrará el mismo evento de T&A. Usa esta opción para designar el dispositivo para marcar entrada o salida."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_option6",
            product: "air"
          }), ": Requiere que el usuario seleccione un código de T&A antes de la autenticación. El evento de T&A seleccionado se registra en el registro de acceso."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Los modos de gestión de asistencia compatibles pueden variar según el modelo de dispositivo. Para obtener más información, consulta los modos de T&A específicos del dispositivo en ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/device-info-settings"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-and-exporting-t-and-a-logs",
      children: "Ver y exportar registros de T&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los eventos de T&A se guardan en el registro de eventos y se pueden revisar o exportar a un archivo CSV."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ubica la columna ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "T&A"
          }), " en la tabla de registros."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-event-log-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAirColumn, {
            title: "Customize"
          }), " en la parte superior de la tabla de registros para personalizar la vista y mover la columna ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "T&A"
          }), " para una mejor visibilidad."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-event-log-list-column-set.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAirDown, {
            title: "Download"
          }), " y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_csv",
            product: "air"
          }), " para descargar los datos como un archivo CSV."]
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