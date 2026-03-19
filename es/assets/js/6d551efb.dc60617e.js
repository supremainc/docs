"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["32226"], {
10377: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_linkpass_credentials_mdx_6d5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-linkpass-credentials-mdx-6d5.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_linkpass_credentials_mdx_6d5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/linkpass-credentials","title":"Credenciales LinkPass","description":"Aprenda a emitir y administrar credenciales LinkPass para usuarios temporales que no usan la app, como visitantes o repartidores, mediante el control de puertas en la nube de BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/linkpass-credentials.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/linkpass-credentials","permalink":"/docs/es/platform/biostar_air/linkpass-credentials","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/linkpass-credentials.mdx","tags":[],"version":"current","frontMatter":{"id":"linkpass-credentials","title":"Credenciales LinkPass","description":"Aprenda a emitir y administrar credenciales LinkPass para usuarios temporales que no usan la app, como visitantes o repartidores, mediante el control de puertas en la nube de BioStar Air.","keywords":["LinkPass","Credenciales","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Tipos de tarjetas y credenciales de usuario","permalink":"/docs/es/platform/biostar_air/user-card-types"},"next":{"title":"Dispositivos","permalink":"/docs/es/platform/biostar_air/manage-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/linkpass-credentials.mdx


const frontMatter = {
	id: 'linkpass-credentials',
	title: 'Credenciales LinkPass',
	description: 'Aprenda a emitir y administrar credenciales LinkPass para usuarios temporales que no usan la app, como visitantes o repartidores, mediante el control de puertas en la nube de BioStar Air.',
	keywords: [
		'LinkPass',
		'Credenciales',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Activar credenciales LinkPass",
  "id": "activar-credenciales-linkpass",
  "level": 2
}, {
  "value": "Usar LinkPass",
  "id": "usar-linkpass",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirEdit, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "LinkPass es una credencial móvil que se puede usar en BioStar Air sin una app. Los administradores pueden otorgar acceso a usuarios sin que instalen una app ni utilicen BLE o NFC. Como LinkPass funciona a través de la nube de BioStar Air y se activa mediante un enlace web seguro, es ideal para la entrada de clientes, entregas o accesos de baja seguridad, como portones de estacionamiento y vestíbulos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Alcance de la credencial"
          }), ": Una credencial LinkPass otorga acceso a las mismas puertas que las otras credenciales asignadas al usuario. No se recomienda emitir una credencial LinkPass a usuarios que no tienen acceso a áreas de alta seguridad."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No se requiere app"
          }), ": LinkPass funciona a través de un navegador web, por lo que no necesita una app móvil, Bluetooth ni comunicación NFC."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Acceso en la nube"
          }), ": Los comandos de LinkPass se envían a través de la nube de BioStar Air y pueden activarse desde cualquier lugar con conexión a Internet. No comparte ni rastrea la ubicación."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Conectividad del lector"
          }), ": El lector de la puerta debe estar en línea y conectado a BioStar Air para que LinkPass funcione correctamente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Casos de uso recomendados"
          }), ": LinkPass es adecuado para visitantes temporales, entregas y áreas de baja seguridad como vestíbulos o portones de estacionamiento."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "activar-credenciales-linkpass",
      children: "Activar credenciales LinkPass"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicie sesión en el ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com/login",
            children: "sitio web de BioStar Air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Navegue a la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_edit_header",
            product: "air"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_form_tab",
            product: "air"
          }), " usando uno de los siguientes métodos."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Seleccione un usuario existente en la lista y luego haga clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " en la esquina superior derecha."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_btn",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_btn",
                product: "air"
              }), " en la esquina superior derecha de la pantalla."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "credential_detail",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Active la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input20",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-user-credential-credential-type-web.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en la casilla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option4",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input8",
            product: "air"
          }), " una ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "dirección de correo electrónico"
          }), " o un ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "número de teléfono"
          }), " únicos donde el usuario pueda recibir el enlace de la credencial."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-linkpass-credential.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column6",
            product: "air"
          }), " correspondiente y configure el ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column3",
            product: "air"
          }), " del usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_card_activate_btn",
            product: "air"
          }), " para emitir la credencial."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Envíele al usuario una invitación con la URL única de LinkPass por correo electrónico o SMS."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usar-linkpass",
      children: "Usar LinkPass"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "En un dispositivo móvil, abra la URL de LinkPass desde el correo electrónico o el SMS."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La página web muestra todas las puertas asignadas al usuario, y cada puerta tiene ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "web_card_preview_button1",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "web_card_preview_button1",
            product: "air"
          }), " para abrir la puerta enviando un comando de desbloqueo en la nube al lector."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "LinkPass no requiere comunicación por Bluetooth ni NFC."
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