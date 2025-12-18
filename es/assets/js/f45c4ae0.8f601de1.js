"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["85228"], {
28340: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_transfer_user_info_to_device_mdx_f45_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-transfer-user-info-to-device-mdx-f45.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_transfer_user_info_to_device_mdx_f45_namespaceObject = JSON.parse('{"id":"platform/biostar_x/transfer-user-info-to-device","title":"Transferir información de usuario al dispositivo","description":"Esta guía explica cómo transferir la información de usuario al dispositivo registrado.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/transfer-user-info-to-device.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/transfer-user-info-to-device","permalink":"/docs/es/platform/biostar_x/transfer-user-info-to-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/transfer-user-info-to-device.mdx","tags":[],"version":"current","frontMatter":{"id":"transfer-user-info-to-device","title":"Transferir información de usuario al dispositivo","description":"Esta guía explica cómo transferir la información de usuario al dispositivo registrado.","keywords":["Usuario","Dispositivo"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Borrar Usuario","permalink":"/docs/es/platform/biostar_x/delete-user"},"next":{"title":"Rastrear Historial De Acceso De Usuarios","permalink":"/docs/es/platform/biostar_x/trace-user-access-log"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/transfer-user-info-to-device.mdx


const frontMatter = {
	id: 'transfer-user-info-to-device',
	title: 'Transferir información de usuario al dispositivo',
	description: 'Esta guía explica cómo transferir la información de usuario al dispositivo registrado.',
	keywords: [
		'Usuario',
		'Dispositivo'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Proporciona una función para transmitir al dispositivo la información de usuario registrada en el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " para el control de acceso. Cuando se envía la información de usuario al dispositivo, este utiliza los datos del usuario para determinar los permisos de acceso y puede realizar autenticación incluso en entornos sin conexión."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haz clic en la casilla de verificación a la izquierda del usuario cuya información deseas enviar desde la lista de usuarios. Selecciona más de un usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el botón ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la esquina superior derecha de la pantalla y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.transferToDevice"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-list-transfer-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.transferToDevice"
          }), ", selecciona el dispositivo de la lista al que deseas transferir la información de usuario."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-transfer-to-devices.png",
          width: "50%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si la información difiere para el mismo ID, marca la casilla de la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.overwriteWhenTransfer",
            product: "2"
          }), " para sobrescribirla con el contenido del servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de seleccionar todos los dispositivos a los que deseas transferir, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transfiriendo la información de usuario al dispositivo seleccionado."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Busca dispositivos ingresando palabras clave en el campo de búsqueda."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El dispositivo debe estar conectado al servidor ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " para transferir la información de usuario."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si cambias la información de un usuario que ya está registrado en el dispositivo, debes volver a enviar la información de usuario para que los cambios se reflejen en el dispositivo. Para usar la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.automaticUserSync",
              product: "2"
            }), " y sincronizar la información de usuario con el dispositivo, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#user-sync",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Existe un límite en la cantidad de usuarios que se pueden registrar en cada dispositivo. Verifica la cantidad de usuarios que se pueden registrar en el dispositivo."
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