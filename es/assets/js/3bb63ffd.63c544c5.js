"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["56830"], {
13962: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_upgrade_firmware_mdx_3bb_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-upgrade-firmware-mdx-3bb.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_upgrade_firmware_mdx_3bb_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-upgrade-firmware","title":"Actualizar firmware","description":"Instrucciones para actualizar el firmware de los dispositivos conectados a BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-upgrade-firmware.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-upgrade-firmware","permalink":"/docs/es/platform/biostar_x/settings-device-upgrade-firmware","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-upgrade-firmware.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-upgrade-firmware","title":"Actualizar firmware","description":"Instrucciones para actualizar el firmware de los dispositivos conectados a BioStar X.","keywords":["Dispositivo","firmware","Actualizar"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Administrar usuarios registrados en el dispositivo","permalink":"/docs/es/platform/biostar_x/settings-device-manage-device-users"},"next":{"title":"Usar la función de administración de dispositivos","permalink":"/docs/es/platform/biostar_x/settings-device-using-functions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-upgrade-firmware.mdx


const frontMatter = {
	id: 'settings-device-upgrade-firmware',
	title: 'Actualizar firmware',
	description: 'Instrucciones para actualizar el firmware de los dispositivos conectados a BioStar X.',
	keywords: [
		'Dispositivo',
		'firmware',
		'Actualizar'
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
  "value": "Actualización de firmware",
  "id": "upgrade-firmware",
  "level": 2
}, {
  "value": "Actualizar firmware para un solo dispositivo",
  "id": "actualizar-firmware-para-un-solo-dispositivo",
  "level": 3
}, {
  "value": "Actualizar firmware para varios dispositivos",
  "id": "actualizar-firmware-para-varios-dispositivos",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los dispositivos conectados a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " pueden actualizar su firmware fácilmente sin conexiones ni operaciones adicionales. Mantener el firmware del dispositivo actualizado resuelve vulnerabilidades de seguridad y permite acceder a nuevas funciones."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Antes de actualizar el firmware del dispositivo, prepare la nueva versión del archivo de firmware. Guarde el archivo de firmware descargado en la siguiente ruta. Cree una nueva carpeta si la carpeta ", (0,jsx_runtime.jsx)(_components.em, {
        children: "firmware"
      }), " no existe."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "C:\\Program Files\\BioStar X\\firmware"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Busque el nombre del modelo de su dispositivo en el ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com",
          children: "Centro de descargas de Suprema"
        }), " para descargar la última versión del archivo de firmware."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "upgrade-firmware",
      children: "Actualización de firmware"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "actualizar-firmware-para-un-solo-dispositivo",
      children: "Actualizar firmware para un solo dispositivo"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en el dispositivo que desea actualizar en la lista de dispositivos."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.firmwareUpgrade",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.information",
            product: "2"
          }), " de la pantalla de detalles del dispositivo."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-info-upgrade-firmware.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Esto inicia la actualización de firmware del dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "actualizar-firmware-para-varios-dispositivos",
      children: "Actualizar firmware para varios dispositivos"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione la casilla situada completamente a la izquierda de los dispositivos que desea actualizar en la lista de dispositivos. Puede seleccionar varios dispositivos."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.firmwareUpgrade",
            product: "2"
          }), " en la parte superior derecha de la lista de dispositivos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-upgrade-firmware.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.firmwareUpgrade",
            product: "2"
          }), ", haga clic en la versión de firmware."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-upgrade-firmware-popup.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Esto inicia la actualización de firmware de los dispositivos seleccionados."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El botón ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.firmwareUpgrade",
              product: "2"
            }), " se activa solo después de seleccionar un dispositivo de la lista de dispositivos."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los dispositivos con el mismo modo RS-485 pueden actualizarse simultáneamente en grupos. Por ejemplo, los dispositivos maestros pueden actualizar varios dispositivos maestros a la vez, y los dispositivos esclavos pueden actualizar varios dispositivos esclavos a la vez."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los dispositivos maestros o los esclavos sin maestro pueden actualizarse simultáneamente en grupos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los dispositivos esclavos conectados al mismo dispositivo maestro no pueden actualizarse simultáneamente."
          }), "\n"]
        }), "\n"]
      })
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