"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["51215"], {
18657: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_advanced_settings_mdx_964_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-site-advanced-settings-mdx-964.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_advanced_settings_mdx_964_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-advanced-settings","title":"Configuración Avanzada","description":"Utilice la configuración avanzada del sitio BioStar Air para adaptar el sistema a las necesidades de su organización. Puede ajustar varias opciones, como la zona horaria, el control de tiempo y asistencia, la autenticación móvil y la compatibilidad con lectores.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-advanced-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-advanced-settings","permalink":"/docs/es/platform/biostar_air/site-advanced-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-advanced-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-advanced-settings","title":"Configuración Avanzada","description":"Utilice la configuración avanzada del sitio BioStar Air para adaptar el sistema a las necesidades de su organización. Puede ajustar varias opciones, como la zona horaria, el control de tiempo y asistencia, la autenticación móvil y la compatibilidad con lectores.","keywords":["Configuración Avanzada","configurar"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configuración del perfil","permalink":"/docs/es/platform/biostar_air/site-basic-settings"},"next":{"title":"Configuración de seguridad","permalink":"/docs/es/platform/biostar_air/site-security-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-advanced-settings.mdx


const frontMatter = {
	id: 'site-advanced-settings',
	title: 'Configuración Avanzada',
	description: 'Utilice la configuración avanzada del sitio BioStar Air para adaptar el sistema a las necesidades de su organización. Puede ajustar varias opciones, como la zona horaria, el control de tiempo y asistencia, la autenticación móvil y la compatibilidad con lectores.',
	keywords: [
		'Configuración Avanzada',
		'configurar'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Configure las opciones avanzadas para optimizar BioStar Air según el entorno laboral de su organización. Establezca la zona horaria y el horario de verano, habilite el control de tiempo y asistencia y ajuste los métodos de autenticación móvil y la visualización de los registros de eventos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " en la barra lateral izquierda. Utilice la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_setting",
        product: "air"
      }), " para configurar los ajustes del sitio."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input4",
            product: "air"
          }), ": Cambie la zona horaria en cualquier momento. Los registros y eventos se registran según la zona horaria configurada. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/daylight-saving-time"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_field_dst_usage",
              product: "air"
            }), ": Active o desactive el horario de verano para determinadas regiones."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input8",
            product: "air"
          }), ": Active la función de tiempo y asistencia (T&A). Tras activarla, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), " para configurar los ajustes detallados. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/configuring-ta"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_report",
            product: "air"
          }), ": Genere informes de tiempo y asistencia (T&A). Después de activar la función de informes, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), " para configurar las condiciones del informe. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/reports-time-attendance-reports"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input7",
            product: "air"
          }), ": Active la función Long Touch para abrir puertas de forma remota desde cierta distancia."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_ble_background",
            product: "air"
          }), ": Permitir el uso de tarjetas móviles mientras la aplicación Suprema Pass se ejecuta en segundo plano. Cuando está activado, los usuarios pueden abrir una puerta sin abrir la aplicación."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "display_face_preview_setting",
            product: "air"
          }), ": Mostrar una vista previa del rostro al emitir credenciales faciales."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input5",
            product: "air"
          }), ": Establezca cómo se muestran las horas en los registros de eventos."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_time_display_setting1",
                product: "air"
              }), ": Mostrar los registros de eventos según la zona horaria de cada dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_time_display_setting2",
                product: "air"
              }), ": Mostrar los registros según la zona horaria del sitio. Útil cuando todos los dispositivos están en una misma ubicación. Consulte la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_profile_input4",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "new_setting_label_msb",
            product: "air"
          }), ": Configure cómo se transmiten los datos de la tarjeta al usar Airfob Patch con lectores de terceros."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Esta configuración se aplica únicamente a los dispositivos Patch y puede ajustarse para coincidir con el tipo de dispositivo de terceros al que está conectado el Patch."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "validity_period_label",
            product: "air"
          }), ": Establezca el período de validez predeterminado para las credenciales móviles."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los administradores pueden establecer una fecha de caducidad distinta para las credenciales de cada usuario. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/adding-individual-users#setting-access-levels-and-validity"
            }), "."]
          })
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