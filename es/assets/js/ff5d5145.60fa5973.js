"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["85608"], {
31153: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_account_settings_mdx_ff5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-account-settings-mdx-ff5.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_account_settings_mdx_ff5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/account-settings","title":"Configuración de la cuenta personal","description":"Esta guía explica cómo cambiar los ajustes de su cuenta personal en BioStar Air—como la contraseña, las alertas y la configuración del intercomunicador IP—y cómo salir del sitio y eliminar permanentemente su cuenta.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/account-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/account-settings","permalink":"/docs/es/platform/biostar_air/account-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/account-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"account-settings","title":"Configuración de la cuenta personal","description":"Esta guía explica cómo cambiar los ajustes de su cuenta personal en BioStar Air—como la contraseña, las alertas y la configuración del intercomunicador IP—y cómo salir del sitio y eliminar permanentemente su cuenta.","keywords":["Ajustes de la cuenta","perfil","alertas","Intercomunicador SIP","gestión de la cuenta"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Administrar cuentas y roles de administradores","permalink":"/docs/es/platform/biostar_air/managing-administrators"},"next":{"title":"Configuración adicional del sitio","permalink":"/docs/es/platform/biostar_air/service-configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/account-settings.mdx


const frontMatter = {
	id: 'account-settings',
	title: 'Configuración de la cuenta personal',
	description: 'Esta guía explica cómo cambiar los ajustes de su cuenta personal en BioStar Air—como la contraseña, las alertas y la configuración del intercomunicador IP—y cómo salir del sitio y eliminar permanentemente su cuenta.',
	keywords: [
		'Ajustes de la cuenta',
		'perfil',
		'alertas',
		'Intercomunicador SIP',
		'gestión de la cuenta'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Acceda a los ajustes de la cuenta",
  "id": "accessAccountSettings",
  "level": 2
}, {
  "value": "Cambiar la información de la cuenta",
  "id": "changeAccountInfo",
  "level": 2
}, {
  "value": "Configurar alertas",
  "id": "setAlertPreferences",
  "level": 2
}, {
  "value": "Configuración del intercomunicador",
  "id": "manageSIPIntercom",
  "level": 2
}, {
  "value": "Salir del sitio o eliminar la cuenta",
  "id": "manageAccount",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirEdit, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Puede administrar los ajustes de su cuenta personal, por ejemplo cambiar la contraseña, configurar cómo recibe las alertas y ajustar la configuración del intercomunicador IP. También puede salir del sitio o eliminar su cuenta de forma permanente."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessAccountSettings",
      children: "Acceda a los ajustes de la cuenta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicia sesión en el ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "portal de BioStar Air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en el icono de perfil de usuario en la parte superior derecha de la pantalla."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " en el menú desplegable."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-bs3-sip-account-settings.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), ", configure las opciones deseadas."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "account",
                product: "air"
              }), ": Edite el nombre de usuario, la contraseña y el número de teléfono. Consulte ", (0,jsx_runtime.jsx)(DocLink, {
                inner: "#changeAccountInfo"
              }), " para más detalles."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.alerts",
                product: "air"
              }), ": Configure cómo se reciben las alertas. Consulte ", (0,jsx_runtime.jsx)(DocLink, {
                inner: "#setAlertPreferences"
              }), " para más detalles."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_title",
                product: "air"
              }), ": Administre la configuración del intercomunicador SIP. Consulte ", (0,jsx_runtime.jsx)(DocLink, {
                inner: "#manageSIPIntercom"
              }), " para más detalles."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_tab_management",
                product: "air"
              }), ": Salga del sitio o elimine la cuenta. Consulte ", (0,jsx_runtime.jsx)(DocLink, {
                inner: "#manageAccount"
              }), " para más detalles."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changeAccountInfo",
      children: "Cambiar la información de la cuenta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "account",
        product: "air"
      }), ", edite la información del usuario que ha iniciado sesión."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-account-settings-account.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Edite el nombre de usuario, la contraseña y el número de teléfono. Haga clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " para cada elemento."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "session_timeout_label",
            product: "air"
          }), ": Cierra sesión automáticamente cuando haya transcurrido el tiempo seleccionado. Seleccione el tiempo deseado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setAlertPreferences",
      children: "Configurar alertas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alerts",
        product: "air"
      }), ", configure cómo se reciben las alertas. Active la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "all_service_alerts",
        product: "air"
      }), " para recibir todas las alertas. Desactive las alertas no deseadas individualmente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-account-settings-alert-report.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si aceptó recibir alertas en la aplicación pero no aparecen, verifique la configuración del dispositivo móvil. Las alertas en la aplicación deben estar permitidas en dispositivos iOS o Android."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los usuarios pueden negarse a recibir alertas del servicio; hacerlo no restringe el uso del servicio."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageSIPIntercom",
      children: "Configuración del intercomunicador"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_intercom_title",
        product: "air"
      }), ", administre la configuración del intercomunicador SIP."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-bs3-sip-account-settings-intercom.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la configuración del intercomunicador SIP, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/sip-intercom-for-biostation3"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageAccount",
      children: "Salir del sitio o eliminar la cuenta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_management",
        product: "air"
      }), ", sal del sitio o elimina la cuenta."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-account-settings-management.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "leave_site",
            product: "air"
          }), ": Sal del sitio. Después de salir del sitio, tendrás que recibir una invitación del administrador del sitio para volver a unirte."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "account_settings_option_3",
            product: "air"
          }), ": Elimina la cuenta de forma permanente. Al eliminarla, se borran de forma irreversible todos los datos personales y la configuración, y no se podrán recuperar."]
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