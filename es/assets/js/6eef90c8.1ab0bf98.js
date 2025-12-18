"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["59092"], {
94004: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_intrusion_alarm_mdx_6ee_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-advanced-ac-intrusion-alarm-mdx-6ee.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_intrusion_alarm_mdx_6ee_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-intrusion-alarm","title":"Alarma Intrusión","description":"Esta guía muestra cómo configurar la seguridad. La función de alarma de intrusión permite bloquear puertas o activar alarmas cuando se detecta una intrusión.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-intrusion-alarm","permalink":"/docs/es/platform/biostar_x/settings-advanced-ac-intrusion-alarm","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-intrusion-alarm","title":"Alarma Intrusión","description":"Esta guía muestra cómo configurar la seguridad. La función de alarma de intrusión permite bloquear puertas o activar alarmas cuando se detecta una intrusión.","keywords":["Control de acceso avanzado","Alarma Intrusión"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Apertura Programada","permalink":"/docs/es/platform/biostar_x/settings-advanced-ac-scheduled-unlock"},"next":{"title":"Esclusa","permalink":"/docs/es/platform/biostar_x/settings-advanced-ac-interlock"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx


const frontMatter = {
	id: 'settings-advanced-ac-intrusion-alarm',
	title: 'Alarma Intrusión',
	description: 'Esta guía muestra cómo configurar la seguridad. La función de alarma de intrusión permite bloquear puertas o activar alarmas cuando se detecta una intrusión.',
	keywords: [
		'Control de acceso avanzado',
		'Alarma Intrusión'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar alarma de intrusión",
  "id": "addIntrusionAlarmZone",
  "level": 2
}, {
  "value": "Guía de opciones de configuración",
  "id": "setting",
  "level": 2
}, {
  "value": "Ajustes de armado o desarmado",
  "id": "armConfiguration",
  "level": 2
}, {
  "value": "Agregar armado/desarmado por dispositivo",
  "id": "addArmInput",
  "level": 3
}, {
  "value": "Agregar armado/desarmado por señal de entrada",
  "id": "addArmInputBySignal",
  "level": 3
}, {
  "value": "Ajustes de detección de intrusión",
  "id": "intrusionSetting",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Glossary, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía muestra cómo configurar la seguridad. Los ajustes de la alarma de intrusión permiten bloquear puertas o activar alarmas cuando se detecta una intrusión."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(Glossary, {
        termid: "intrusion_alarm_zone"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addIntrusionAlarmZone",
      children: "Agregar alarma de intrusión"
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
            sid: "setting.menu.advancedAc.root"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addZone",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion",
            product: "2"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Introduzca el nombre del ajuste de alarma de intrusión que desea agregar en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-intrusion.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure los detalles de los ajustes de alarma de intrusión en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), ". Para obtener más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Agregue ajustes de autenticación para el armado y desarmado en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.armConfiguration",
            product: "2"
          }), ". Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#armConfiguration",
            children: "lo siguiente"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-intrusion-set-arm.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.intrusion.armConfiguration",
              product: "2"
            }), " aparece cuando selecciona una puerta en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.info",
              product: "2"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure las señales de detección de intrusión en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.intrusionSetting",
            product: "2"
          }), ". Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#intrusionSetting",
            children: "lo siguiente"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-intrusion-set-intrusion.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure las acciones que se realizarán cuando ocurran eventos específicos en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.alarm",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de completar todas las configuraciones, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Las secciones ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.intrusion.armConfiguration",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.intrusion.intrusionSetting",
          product: "2"
        }), " y ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.alarm",
          product: "2"
        }), " están disponibles solo si la opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.pause.doorselected",
          product: "2"
        }), " está configurada en la sección ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.setting",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "Guía de opciones de configuración"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los detalles para los ajustes de alarma de intrusión son los siguientes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone",
            product: "2"
          }), ": Establece el alcance de aplicación. Los ajustes de alarma de intrusión solo admiten el modo ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone.local",
            product: "2"
          }), " y solo se pueden configurar con dispositivos conectados mediante RS-485 y dispositivos de entrada."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activatedAndDeactivated",
            product: "2"
          }), ": Puedes activar o desactivar temporalmente la configuración."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.doorselected",
            product: "2"
          }), ": Seleccione la puerta a la que se aplicará la función de alarma de intrusión."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "armConfiguration",
      children: "Ajustes de armado o desarmado"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agregue ajustes de autenticación para el armado y desarmado."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-adv-ac-add-intrusion-set-arm.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure el tiempo de retraso para el armado o desarmado con ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.delayTime",
            product: "2"
          }), ". Esto significa que el armado es el tiempo de retraso después de la autenticación hasta que inicia la alarma, y el desarmado es el tiempo de retraso antes de que se active la alarma después de que se detecta una intrusión."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Agregue tarjetas autorizadas para el armado o desarmado con ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.accessCard",
            product: "2"
          }), ". Registre hasta 128 tarjetas de armado/desarmado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione los grupos autorizados para el armado o desarmado con ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.accessGroup",
            product: "2"
          }), ". Registre hasta 128 grupos de armado/desarmado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure el armado/desarmado mediante el dispositivo o señal de entrada con ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.armInput",
            product: "2"
          }), ". Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " y configure cada elemento."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addArmInput",
      children: "Agregar armado/desarmado por dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.plusAdd",
        product: "2"
      }), " en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armInput",
        product: "2"
      }), " (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.device",
        product: "2"
      }), "). Seleccione el dispositivo para controlar la función de alarma de intrusión y elija ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armType",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType",
        product: "2"
      }), " puede seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.card",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.key",
        product: "2"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.cardOrKey",
        product: "2"
      }), ". Los dispositivos sin pantalla LCD solo pueden usar ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.card",
        product: "2"
      }), " como tipo de entrada."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-add-device.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addArmInputBySignal",
      children: "Agregar armado/desarmado por señal de entrada"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.plusAdd",
        product: "2"
      }), " en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armInput",
        product: "2"
      }), " (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.input",
        product: "2"
      }), "). Seleccione el dispositivo para controlar la función de alarma de intrusión. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.port",
        product: "2"
      }), " para elegir el puerto de entrada del dispositivo seleccionado."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Después de elegir ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armType",
        product: "2"
      }), ", establezca el tipo de interruptor y la duración de la señal."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-add-signal.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intrusionSetting",
      children: "Ajustes de detección de intrusión"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure las señales de detección de intrusión. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " y configúrelo como se muestra a continuación para reconocer una intrusión cuando un sensor N/O conectado al puerto de entrada 0 del dispositivo BioStation 3 envíe una señal durante 100 (ms)."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-detect-settings.png"
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