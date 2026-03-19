"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["45741"], {
66616: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_selector_mdx_30b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-site-selector-mdx-30b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_selector_mdx_30b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-selector","title":"Selector de sitios","description":"Este artículo explica cómo administrar múltiples sitios de BioStar Air con una sola dirección de correo electrónico y cómo agilizar el proceso de inicio de sesión mediante la función Selector de sitios.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-selector.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-selector","permalink":"/docs/es/platform/biostar_air/site-selector","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-selector.mdx","tags":[],"version":"current","frontMatter":{"id":"site-selector","title":"Selector de sitios","description":"Este artículo explica cómo administrar múltiples sitios de BioStar Air con una sola dirección de correo electrónico y cómo agilizar el proceso de inicio de sesión mediante la función Selector de sitios.","keywords":["BioStar Air","inicio de sesión","Selector de sitios"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Primeros Pasos","permalink":"/docs/es/platform/biostar_air/getting-started"},"next":{"title":"Primeros pasos con la aplicación BioStar Air","permalink":"/docs/es/platform/biostar_air/managing-sites-with-app"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-selector.mdx


const frontMatter = {
	id: 'site-selector',
	title: 'Selector de sitios',
	description: 'Este artículo explica cómo administrar múltiples sitios de BioStar Air con una sola dirección de correo electrónico y cómo agilizar el proceso de inicio de sesión mediante la función Selector de sitios.',
	keywords: [
		'BioStar Air',
		'inicio de sesión',
		'Selector de sitios'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "¿Qué es el Selector de sitios?",
  "id": "siteSelector",
  "level": 2
}, {
  "value": "Crear un nuevo sitio",
  "id": "newSite",
  "level": 2
}, {
  "value": "Usar una misma dirección de correo en varios sitios",
  "id": "existingSites",
  "level": 2
}, {
  "value": "Cómo usar el Selector de sitios",
  "id": "howToLogInAndUseTheSiteSelector",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["La función ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Selector de sitios"
      }), " simplifica los procesos y reduce la necesidad de iniciar sesión varias veces al permitir administrar múltiples sitios con una sola dirección de correo electrónico."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "siteSelector",
      children: "¿Qué es el Selector de sitios?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["La función ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Selector de sitios"
      }), " permite iniciar sesión en el portal de BioStar Air con una sola dirección de correo electrónico, incluso cuando se administran múltiples sitios. No es necesario iniciar sesión con direcciones de correo distintas para cada sitio. Inicie sesión una vez con una sola dirección de correo y luego use el menú ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Selector de sitios"
      }), " para cambiar fácilmente entre los sitios que administra."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-site-selector.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Aunque se use una dirección de correo unificada, los permisos y la configuración de cada sitio siguen siendo independientes. Los roles de administrador y los derechos de acceso se gestionan por separado para cada sitio."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si la función ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selector de sitios"
            }), " no aparece o se muestra un sitio incorrecto, verifique que la solicitud de migración esté completa; si no lo está, comuníquese con el equipo de soporte para recibir ayuda."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selector de sitios"
            }), " agiliza el proceso de inicio de sesión y consolida varios sitios en una sola cuenta, ahorrando tiempo y esfuerzo al gestionar múltiples sitios en BioStar Air."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los sitios marcados con un icono ", (0,jsx_runtime.jsx)(_components.code, {
              children: "F"
            }), " son Sitios federados en la lista de selección de sitios. Los Sitios federados se muestran en la esquina superior izquierda de la pantalla. Para obtener más información sobre Sitios federados, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/federated-sites"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/air/bsair-site-selector-top.png"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "newSite",
      children: "Crear un nuevo sitio"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Al crear un nuevo sitio a través del Partner Portal, utilice una dirección de correo electrónico que ya esté registrada como cuenta de administrador en otro sitio. El sistema vincula automáticamente el nuevo sitio al correo existente, lo que permite administrar múltiples sitios con una sola cuenta."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cree un nuevo sitio mediante el ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com/",
            children: "Partner Portal"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando se solicite el correo electrónico del administrador, introduzca la dirección que ya está vinculada a otro sitio."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "El nuevo sitio se vincula automáticamente a la cuenta existente."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener información detallada sobre cómo registrarse y usar el Partner Portal, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/biostar-air-partner-portal-detailed-use"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "existingSites",
      children: "Usar una misma dirección de correo en varios sitios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si ya administra varios sitios pero cada uno utiliza credenciales de inicio de sesión distintas, solicite una migración manual a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Suprema"
      }), ". Este proceso consolida las direcciones de correo electrónico y permite administrar todos los sitios con un único inicio de sesión."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Comuníquese con el equipo de soporte y solicite una migración manual de los sitios."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si se usan direcciones alias como ", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:bob+site1@example.com",
            children: "bob+site1@example.com"
          }), " y ", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:bob+site2@example.com",
            children: "bob+site2@example.com"
          }), ", proporcione la dirección de correo raíz (", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:bob@example.com",
            children: "bob@example.com"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Si se usan direcciones de correo completamente distintas para cada sitio, proporcione la lista completa de direcciones de correo electrónico."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez completada la migración, acceda a todos los sitios con una sola dirección de correo mediante la función ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Selector de sitios"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "howToLogInAndUseTheSiteSelector",
      children: "Cómo usar el Selector de sitios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si su dirección de correo está asociada a varios sitios, iniciar sesión y cambiar entre ellos es sencillo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ingrese su dirección de correo electrónico y su contraseña."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si administra varios sitios, use la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "select_site_title",
            product: "air"
          }), " para encontrar rápidamente el sitio que desea. Al seleccionar un sitio, accederá al panel de control."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-site-selector-search.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Después de iniciar sesión, haga clic en el icono de su perfil en la esquina superior derecha de la pantalla."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el menú emergente, haga clic en la opción ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Selector de sitio"
          }), " situada debajo de su dirección de correo electrónico."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-site-selector-profile.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede ver una lista de todos los sitios asociados a su dirección de correo electrónico."
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