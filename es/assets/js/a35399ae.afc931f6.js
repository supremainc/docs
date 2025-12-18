"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["95064"], {
34672: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_manage_device_users_mdx_a35_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-manage-device-users-mdx-a35.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_manage_device_users_mdx_a35_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-manage-device-users","title":"Administrar usuarios registrados en el dispositivo","description":"Este documento ofrece orientación sobre cómo administrar los usuarios almacenados en el dispositivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-manage-device-users.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-manage-device-users","permalink":"/docs/es/platform/biostar_x/settings-device-manage-device-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-manage-device-users.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-manage-device-users","title":"Administrar usuarios registrados en el dispositivo","description":"Este documento ofrece orientación sobre cómo administrar los usuarios almacenados en el dispositivo.","keywords":["Dispositivo","Usuario"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Registrar esclavo","permalink":"/docs/es/platform/biostar_x/settings-adding-slave-device"},"next":{"title":"Actualizar firmware","permalink":"/docs/es/platform/biostar_x/settings-device-upgrade-firmware"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-manage-device-users.mdx


const frontMatter = {
	id: 'settings-device-manage-device-users',
	title: 'Administrar usuarios registrados en el dispositivo',
	description: 'Este documento ofrece orientación sobre cómo administrar los usuarios almacenados en el dispositivo.',
	keywords: [
		'Dispositivo',
		'Usuario'
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Comprueba la cantidad de usuarios, huellas, rostros y tarjetas almacenados en el dispositivo. Compara la información de los usuarios no registrados en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " con la información de los usuarios registrados y envíala o elimínala en el servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
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
          children: ["Selecciona el dispositivo en la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.device.allDeviceGroups",
            product: "2"
          }), " y haz clic con el botón derecho."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.manageUsersInDevice",
            product: "2"
          }), " en el menú emergente."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-manage-device-users.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.menu.manageUsersInDevice",
        product: "2"
      }), ", compara la información de usuario registrada en el dispositivo con la información de usuario registrada en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-manage-device-users-popup.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consulta los valores que aparecen en la columna ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.status",
        product: "2"
      }), " para decidir si eliminas la información de usuario del dispositivo o la envías al servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Los valores de la columna ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.status",
        product: "2"
      }), " son los siguientes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.syncStatus.same",
            product: "2"
          }), ": Usuario con la misma información registrada en el servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.syncStatus.different",
            product: "2"
          }), ": Usuario con información diferente de la registrada en el servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.syncStatus.newUser",
            product: "2"
          }), ": Usuario de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " que no está almacenado en el servidor"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Selecciona al usuario y haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.delete",
        product: "2"
      }), " para eliminar su información del dispositivo. Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.upload",
        product: "2"
      }), " para enviar la información de usuario al servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.manageUsersInDevice",
              product: "2"
            }), " solo se puede usar con un dispositivo seleccionado."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al hacer clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.upload",
              product: "2"
            }), ", si existe un usuario en el servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " con el mismo ID, se actualizará con la información del dispositivo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La información de usuario eliminada se quita solo del dispositivo y se conserva en el servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración del dispositivo, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details",
              children: "lo siguiente"
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