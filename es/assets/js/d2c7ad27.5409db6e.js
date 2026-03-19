"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["17837"], {
42623: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_additional_settings_mdx_d2c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-site-additional-settings-mdx-d2c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_additional_settings_mdx_d2c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-additional-settings","title":"Configuración de funciones adicionales","description":"Esta guía explica cómo habilitar y configurar las funciones adicionales de BioStar Air, como lectores de códigos QR, integración con cámaras IP y webhooks.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-additional-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-additional-settings","permalink":"/docs/es/platform/biostar_air/site-additional-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-additional-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-additional-settings","title":"Configuración de funciones adicionales","description":"Esta guía explica cómo habilitar y configurar las funciones adicionales de BioStar Air, como lectores de códigos QR, integración con cámaras IP y webhooks.","keywords":["Configuración adicional del sitio","Configuración adicional"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configuración de seguridad","permalink":"/docs/es/platform/biostar_air/site-security-settings"},"next":{"title":"Administrar cuentas y roles de administradores","permalink":"/docs/es/platform/biostar_air/managing-administrators"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-additional-settings.mdx


const frontMatter = {
	id: 'site-additional-settings',
	title: 'Configuración de funciones adicionales',
	description: 'Esta guía explica cómo habilitar y configurar las funciones adicionales de BioStar Air, como lectores de códigos QR, integración con cámaras IP y webhooks.',
	keywords: [
		'Configuración adicional del sitio',
		'Configuración adicional'
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
    code: "code",
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
      children: "Puede habilitar o deshabilitar funciones adicionales necesarias para el funcionamiento del sitio, como el soporte para lectores de códigos QR, la integración con cámaras IP compatibles con ONVIF y el reenvío de eventos a sistemas externos (webhooks)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " en la barra lateral izquierda. Utilice la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_qr_reader_tab",
        product: "air"
      }), " para habilitar o deshabilitar funciones adicionales."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-additional-feature.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_qr_label",
            product: "air"
          }), ": Admite lectores de códigos QR. Desactive esta opción si no utiliza un lector de códigos QR."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_video_management",
            product: "air"
          }), ": Admite cámaras IP compatibles con ONVIF. Habilite esta función para integrar BioStar Air con la videovigilancia. Después de habilitarla, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting_label",
            product: "air"
          }), " para establecer el tiempo de reproducción del registro de eventos."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la gestión de video, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/ip-camera-support-and-configuration"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_webhook_title",
            product: "air"
          }), ": Habilite los webhooks para enviar eventos de BioStar Air a sistemas externos. Después de habilitar la función, configure los campos a continuación."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-additional-feature-webhook.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_url",
                product: "air"
              }), ": Ingrese la dirección del endpoint del servidor externo que recibirá los eventos. Ejemplo: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "https://example.com/webhook-endpoint"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_secret",
                product: "air"
              }), ": Un token de seguridad usado para verificar que la solicitud del webhook proviene de un servidor de confianza. El servidor remitente cifra la carga útil con la clave de seguridad usando SHA-256 y la envía en el encabezado ", (0,jsx_runtime.jsx)(_components.code, {
                children: "X-Signature"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_form_send_text",
                product: "air"
              }), ": Verifique que el webhook funcione correctamente. Envíe un mensaje de prueba para confirmar que el servidor externo recibe y responde a la solicitud."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Después de introducir toda la información requerida, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "save_btn",
                  product: "air"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_button_reset",
                  product: "air"
                }), " para inicializar la información introducida."]
              }), "\n"]
            }), "\n"]
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