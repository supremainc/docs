"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["18122"], {
50387: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_adding_devices_mdx_e73_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-adding-devices-mdx-e73.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_adding_devices_mdx_e73_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-adding-devices","title":"Registrar dispositivo","description":"Esta guía describe cómo registrar un dispositivo en BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-adding-devices.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-adding-devices","permalink":"/docs/es/platform/biostar_x/settings-adding-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-adding-devices.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-adding-devices","title":"Registrar dispositivo","description":"Esta guía describe cómo registrar un dispositivo en BioStar X.","keywords":["Dispositivo","Agregar dispositivo"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Gestionar grupos de dispositivos","permalink":"/docs/es/platform/biostar_x/settings-manage-device-group"},"next":{"title":"Registrar credenciales Wiegand","permalink":"/docs/es/platform/biostar_x/settings-adding-wiegand"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-adding-devices.mdx


const frontMatter = {
	id: 'settings-adding-devices',
	title: 'Registrar dispositivo',
	description: 'Esta guía describe cómo registrar un dispositivo en BioStar X.',
	keywords: [
		'Dispositivo',
		'Agregar dispositivo'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Antes de comenzar",
  "id": "before-start",
  "level": 2
}, {
  "value": "Registro rápido",
  "id": "quickadd-device",
  "level": 2
}, {
  "value": "Configuración de dirección IP",
  "id": "setipaddress",
  "level": 3
}, {
  "value": "Opciones de búsqueda de dispositivos",
  "id": "devicesearchoptions",
  "level": 3
}, {
  "value": "Búsqueda avanzada",
  "id": "advancedsearch",
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
  }, {Cmd, IcEdit, IcMoreW, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Esta guía explica cómo registrar un dispositivo en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Registrar un dispositivo permite que ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " supervise y administre el estado de ese dispositivo. Asegúrese de que el dispositivo esté correctamente conectado antes de buscarlo. Es conveniente conocer de antemano la ubicación, el ID, la dirección IP y otros detalles al agregar varios dispositivos a la vez."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Al registrar un nuevo dispositivo, cambie el valor de la clave del dispositivo por el valor de la clave de cifrado de datos del servidor. Todos los datos de usuario del dispositivo se eliminarán durante la conversión de clave."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " para eliminar toda la información de configuración y los datos de usuario almacenados en el dispositivo y volver a enviarlos. Encuentre la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " seleccionando el dispositivo en la lista y haciendo clic en el botón ", (0,jsx_runtime.jsx)(IcMoreW, {}), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic con el botón derecho en el nombre del grupo ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "menu.device.waitingDevice",
              product: "2"
            }), " y luego haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.addAllWaitingDevices",
              product: "2"
            }), " para registrar todos los dispositivos del grupo. Haga clic con el botón derecho en el nombre del dispositivo y luego haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.addWaitingDevice",
              product: "2"
            }), " para registrarlo individualmente."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el tipo de ID de usuario en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " difiere del del dispositivo, cambie la configuración del dispositivo según la configuración de ID de usuario de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el tipo de ID de usuario en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " está configurado como alfanumérico, es posible que algunos dispositivos no se puedan usar o tengan restricciones. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#userid-type",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para registrar un dispositivo y configurar sus detalles, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Revise lo siguiente antes de registrar el dispositivo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure los niveles de acceso, grupos de acceso y niveles de piso para el control de acceso. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cree un grupo para administrar los dispositivos de forma eficiente. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-manage-device-group",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quickadd-device",
      children: "Registro rápido"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los dispositivos en la misma red que ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " se pueden buscar y registrar automáticamente."]
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
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.root"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.searchDevice",
            product: "2"
          }), " en la lista de dispositivos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-search-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.searchDevice",
            product: "2"
          }), ", se mostrará una lista de todos los dispositivos que se pueden registrar. Si el dispositivo deseado no está en la lista, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.search",
            product: "2"
          }), " en la esquina superior derecha."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione en la lista los dispositivos que desee registrar o desmarque los que no quiera registrar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcEdit, {}), " en la columna ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.name",
            product: "2"
          }), " para cambiar el nombre del dispositivo que se registrará y realice el cambio."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device-rename.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el grupo del dispositivo que se registrará en la columna ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.group",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando haya terminado de configurar todos los dispositivos seleccionados, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los dispositivos añadidos aparecerán en la lista de dispositivos. Seleccione el dispositivo añadido y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.syncDevice",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-sync-device.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Modifique los dispositivos cuya dirección IP no esté disponible o deba cambiarse haciendo clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.setIp",
          product: "2"
        }), ". Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#setipaddress",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setipaddress",
      children: "Configuración de dirección IP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cambie la dirección IP del dispositivo que se registrará. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.setIp",
        product: "2"
      }), " en la parte inferior izquierda de la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.searchDevice",
        product: "2"
      }), ". Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.setIp",
        product: "2"
      }), ", seleccione el dispositivo al que desea cambiar la dirección IP."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-set-ip.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useDhcp",
            product: "2"
          }), ": Seleccione esta opción para que el dispositivo obtenga automáticamente una dirección IP mediante DHCP. Al seleccionar esta opción, es posible que la dirección IP cambie cada vez que el dispositivo se conecte a la red."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Para introducir manualmente la dirección IP, la máscara de subred, la puerta de enlace, etc., desmarque esta opción."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceToServerConnection",
            product: "2"
          }), ": Seleccione esta opción para configurar el dispositivo para que se conecte al servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Deberá introducir la dirección IP y el número de puerto del servidor donde está instalado ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Después de completar toda la configuración de IP y guardar los cambios, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), ". Para cancelar los cambios, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.cancel",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "devicesearchoptions",
      children: "Opciones de búsqueda de dispositivos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure las opciones de búsqueda de dispositivos haciendo clic en ", (0,jsx_runtime.jsx)(IcSet, {}), " en la esquina superior derecha de la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.searchDevice",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-add-device-option.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.showNewDevicesOnly",
            product: "2"
          }), ": Seleccione esta opción para mostrar solo los dispositivos recién detectados en la lista de búsqueda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.timeout",
            product: "2"
          }), ": Establezca el tiempo deseado para excluir de la lista de búsqueda los dispositivos que no respondan durante un periodo determinado. Este valor puede configurarse en segundos, con un valor predeterminado de 3 segundos."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advancedsearch",
      children: "Búsqueda avanzada"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Especifique la dirección IP y el número de puerto de un dispositivo específico para registrarlo."
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
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.root"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.advancedSearch",
            product: "2"
          }), " en la lista de dispositivos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-adv-search-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.advancedSearch",
            product: "2"
          }), ", introduzca la dirección IP y el número de puerto del dispositivo que se va a registrar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-advanced-search.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.search",
            product: "2"
          }), " para mostrar los dispositivos que coincidan con los criterios introducidos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-advanced-search-result.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para registrar el dispositivo, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los dispositivos añadidos aparecerán en la lista de dispositivos. Seleccione el dispositivo añadido y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.syncDevice",
        product: "2"
      }), "."]
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