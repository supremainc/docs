"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["22603"], {
44247: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_info_mdx_a0c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-info-mdx-a0c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_info_mdx_a0c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-info","title":"Ajuste de Información Básica","description":"Proporciona orientación para verificar y ajustar el nombre del dispositivo, el grupo, la zona horaria, el hardware y la versión del firmware.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-info.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-info","permalink":"/docs/es/platform/biostar_x/settings-device-details-info","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-info.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-info","title":"Ajuste de Información Básica","description":"Proporciona orientación para verificar y ajustar el nombre del dispositivo, el grupo, la zona horaria, el hardware y la versión del firmware.","keywords":["Dispositivo","Información"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración del dispositivo","permalink":"/docs/es/platform/biostar_x/settings-device-details"},"next":{"title":"Configuración de red","permalink":"/docs/es/platform/biostar_x/settings-device-details-network"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-info.mdx


const frontMatter = {
	id: 'settings-device-details-info',
	title: 'Ajuste de Información Básica',
	description: 'Proporciona orientación para verificar y ajustar el nombre del dispositivo, el grupo, la zona horaria, el hardware y la versión del firmware.',
	keywords: [
		'Dispositivo',
		'Información'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Cambiar el nombre del dispositivo",
  "id": "cambiar-el-nombre-del-dispositivo",
  "level": 2
}, {
  "value": "Cambiar el grupo del dispositivo",
  "id": "cambiar-el-grupo-del-dispositivo",
  "level": 2
}, {
  "value": "Actualización de firmware",
  "id": "actualización-de-firmware",
  "level": 2
}, {
  "value": "Configurar la fecha y la hora del dispositivo",
  "id": "configurar-la-fecha-y-la-hora-del-dispositivo",
  "level": 2
}, {
  "value": "Desbloquear el dispositivo",
  "id": "desbloquear-el-dispositivo",
  "level": 2
}, {
  "value": "Inicializar el dispositivo",
  "id": "inicializar-el-dispositivo",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["La sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.information",
        product: "2"
      }), " permite configurar la información básica del dispositivo. Permite comprobar el nombre y el grupo del dispositivo, la zona horaria y las versiones de hardware y firmware. Permite cambiar el nombre y el grupo del dispositivo o actualizar su firmware."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Estos son los ajustes de información predeterminados del dispositivo que no se pueden modificar."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceId",
            product: "2"
          }), ": Permite comprobar el ID del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceType",
            product: "2"
          }), ": Permite comprobar el tipo de dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.productName",
            product: "2"
          }), ": Permite comprobar el nombre del modelo del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.kernelVersion",
            product: "2"
          }), ": Permite comprobar la versión del kernel del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.hwVersion",
            product: "2"
          }), ": Permite comprobar la versión de hardware del dispositivo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si el usuario ha realizado cambios, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), ". Los cambios no se aplicarán al dispositivo si no se guardan."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cambiar-el-nombre-del-dispositivo",
      children: "Cambiar el nombre del dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Permite cambiar el nombre predeterminado del dispositivo. Introduzca el nombre deseado del dispositivo en el campo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.name",
        product: "2"
      }), ". Puede introducir un nombre de dispositivo de hasta 48 caracteres. El nombre del dispositivo puede tener hasta 48 caracteres y se usa para identificar el dispositivo en la lista de dispositivos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cambiar-el-grupo-del-dispositivo",
      children: "Cambiar el grupo del dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Permite cambiar el grupo al que pertenece el dispositivo. Seleccione el grupo de dispositivos deseado en el campo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.group",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para más información sobre crear un nuevo grupo de dispositivos, cambiar o eliminar nombres de grupos, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-device-group",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actualización-de-firmware",
      children: "Actualización de firmware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede comprobar la versión de firmware del dispositivo en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.firmwareVersion",
        product: "2"
      }), ". Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.firmwareUpgrade",
        product: "2"
      }), " para actualizar el firmware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para más información sobre la actualización del firmware del dispositivo, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-device-upgrade-firmware",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurar-la-fecha-y-la-hora-del-dispositivo",
      children: "Configurar la fecha y la hora del dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Permite configurar la fecha y la hora del dispositivo mediante las opciones siguientes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeZone",
            product: "2"
          }), ": Permite seleccionar la zona horaria estándar donde se encuentra el dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeSync",
            product: "2"
          }), ": Permite sincronizar la hora del dispositivo con el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dst",
            product: "2"
          }), ": Permite aplicar al dispositivo el horario de verano configurado por el usuario. Consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-system-daylight-saving-time",
            children: "lo siguiente"
          }), " para añadir un nuevo horario de verano."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.date",
            product: "2"
          }), ": Permite configurar manualmente la fecha y la hora del dispositivo. Después de configurar fecha y hora, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.setTime",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Esta función se puede utilizar cuando la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.timeSync",
              product: "2"
            }), " no está seleccionada."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dateFormat",
            product: "2"
          }), ": Permite seleccionar el formato de fecha que se muestra en el dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.getTime",
            product: "2"
          }), ": Permite obtener la hora configurada en el dispositivo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La fecha y la hora configuradas se registrarán en el registro de eventos y en tiempo real. Si la fecha y la hora del dispositivo son incorrectas, los registros pueden ser inexactos."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "desbloquear-el-dispositivo",
      children: "Desbloquear el dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando el dispositivo esté bloqueado debido a condiciones de funcionamiento y acciones, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.locked",
        product: "2"
      }), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.unlock",
        product: "2"
      }), " para desbloquearlo. Permite desbloquear el dispositivo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para más información sobre las condiciones de funcionamiento y la configuración de acciones, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-triger-and-action",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inicializar-el-dispositivo",
      children: "Inicializar el dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para inicializar los ajustes del dispositivo, seleccione una de las siguientes funciones en el campo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.factoryDefault",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset",
            product: "2"
          }), ": Inicializa todos los ajustes del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset.withoutNetwork",
            product: "2"
          }), ": Mantiene los ajustes de red e inicializa los demás ajustes."]
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