"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["52579"], {
18198: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_device_manager_getting_started_mdx_283_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-device-manager-getting-started-mdx-283.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_device_manager_getting_started_mdx_283_namespaceObject = JSON.parse('{"id":"device/device_manager/getting-started","title":"Primeros pasos","description":"Pautas sobre los requisitos mínimos para usar Device Manager.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/device_manager/getting-started.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/getting-started","permalink":"/docs/es/device/device_manager/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"Primeros pasos","description":"Pautas sobre los requisitos mínimos para usar Device Manager.","keywords":["Introducción","Requisitos mínimos"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"Device Manager","permalink":"/docs/es/device/device_manager/"},"next":{"title":"Configuración inicial del dispositivo","permalink":"/docs/es/device/device_manager/initial-setup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/device_manager/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: 'Primeros pasos',
	description: 'Pautas sobre los requisitos mínimos para usar Device Manager.',
	keywords: [
		'Introducción',
		'Requisitos mínimos'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Requisitos mínimos",
  "id": "requisitos-mínimos",
  "level": 2
}, {
  "value": "Dispositivo móvil",
  "id": "dispositivo-móvil",
  "level": 3
}, {
  "value": "Dispositivo y firmware",
  "id": "dispositivo-y-firmware",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Device Manager es una aplicación móvil que permite configurar los dispositivos XPass D2, XPass 2 y BioEntry W3 de Suprema mediante comunicación BLE."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/device-manager-system-diagram1.svg",
      className: "none",
      width: 650,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los administradores pueden conectarse al servidor desde una PC o configurar la red del dispositivo, servidor, comunicación RS-485, formato de tarjeta, ajustes del teclado, PIN, LED y zumbador desde un dispositivo móvil sin desconectarlo físicamente, y también pueden usar funciones como reinicio del dispositivo, actualización de firmware e inicialización de la configuración del dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para XPass D2, los valores configurados una vez pueden guardarse como plantilla para aplicarlos de forma rápida y sencilla a varios dispositivos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "El uso de Suprema Device Manager permite modificar in situ la configuración del XPass D2 integrado con controladoras de terceros."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/device/device-manager-system-diagram2.svg",
        className: "none",
        width: 900,
        alone: true
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requisitos-mínimos",
      children: "Requisitos mínimos"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispositivo-móvil",
      children: "Dispositivo móvil"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compruebe si el dispositivo móvil admite comunicación BLE."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Android 5.0 Lollipop o posterior"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "iOS 9.0 o posterior"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispositivo-y-firmware",
      children: "Dispositivo y firmware"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verifica los dispositivos y las versiones de firmware compatibles."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/es/device/xpass_d2/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "XPass D2"
            })
          }), " versión de firmware 1.1.0 o posterior"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/es/device/xpass_2/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "XPass 2"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MDPB, XP2-GDPB, XP2-GKDPB: versión de firmware 1.0.0 o posterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MAPB: versión de firmware 1.4.1 o posterior"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MAPB-H: versión de firmware 1.4.3 o posterior"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/es/device/bioentry_w3/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioEntry W3"
            })
          }), " versión de firmware 1.0.1 o posterior"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los dispositivos y firmware compatibles están sujetos a cambios."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si la versión de firmware del dispositivo es inferior a las versiones indicadas anteriormente, actualice el firmware del dispositivo en BioStar X. Cuando el dispositivo se utilice como esclavo, el firmware del maestro conectado también debe ser la versión más reciente compatible con BioStar 2 2.7.0 o posterior."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la actualización del firmware del dispositivo, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "ip-device-settings#device-firmware-upgrade",
              children: "IP Device (Upgrade device firmware)"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "xpd2-settings#device-firmware-upgrade",
              children: "XPass D2 (Upgrade device firmware)"
            }), " o la ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-device-upgrade-firmware",
              children: "Guía del administrador de BioStar X"
            }), "."]
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