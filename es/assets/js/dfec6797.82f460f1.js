"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["28385"], {
8458: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_fingerprint_mdx_dfe_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-fingerprint-mdx-dfe.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_fingerprint_mdx_dfe_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-fingerprint","title":"Registrar Dedo","description":"Inscriba la huella digital del usuario como medio de autenticación para el control de acceso. Inscriba la información de la huella digital del usuario mediante un dispositivo que admita autenticación por huella digital.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-fingerprint.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-fingerprint","permalink":"/docs/es/platform/biostar_x/enroll-credential-fingerprint","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-fingerprint.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-fingerprint","title":"Registrar Dedo","description":"Inscriba la huella digital del usuario como medio de autenticación para el control de acceso. Inscriba la información de la huella digital del usuario mediante un dispositivo que admita autenticación por huella digital.","keywords":["Huella","Enrolamiento","Credenciales","Autenticación","Biométrico"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración del modo de autenticación","permalink":"/docs/es/platform/biostar_x/enroll-credential-authmode"},"next":{"title":"Registrar Cara IR","permalink":"/docs/es/platform/biostar_x/enroll-credential-ir-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-fingerprint.mdx


const frontMatter = {
	id: 'enroll-credential-fingerprint',
	title: 'Registrar Dedo',
	description: 'Inscriba la huella digital del usuario como medio de autenticación para el control de acceso. Inscriba la información de la huella digital del usuario mediante un dispositivo que admita autenticación por huella digital.',
	keywords: [
		'Huella',
		'Enrolamiento',
		'Credenciales',
		'Autenticación',
		'Biométrico'
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
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Num} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Num) _missingMdxReference("Num", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Inscriba la huella digital del usuario como medio de autenticación para el control de acceso. Inscriba la información de la huella digital del usuario mediante un dispositivo que admita autenticación por huella digital. Escanee huellas digitales en dispositivos equipados con lectores de huellas digitales."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Antes de inscribir huellas digitales..."
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Asegúrese de que la huella digital del usuario esté limpia y seca."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No inscriba huellas digitales lesionadas o borrosas."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.credential",
        product: "2"
      }), ", haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addFingerprint",
        product: "2"
      }), ". Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.header.fingerprint",
        product: "2"
      }), ", configure cada elemento y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.enroll",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-finger.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device",
            product: "2"
          }), ": Seleccione el dispositivo para inscribir la huella digital."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quality",
            product: "2"
          }), ": Ajuste la calidad de inscripción de huella digital. No se puede inscribir la información de la huella digital si no cumple el nivel de calidad configurado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.viewImage",
            product: "2"
          }), ": Vea la imagen original de la huella digital escaneada en el área ", (0,jsx_runtime.jsx)(Num, {
            num: "1"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), ": Haga clic para añadir una huella digital. Se pueden inscribir hasta 10 huellas digitales."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.scan",
            product: "2"
          }), ": Seleccione el número de huella digital añadido y haga clic. Coloque el dedo en el lector de huellas digitales o en el sensor del dispositivo para escanear la huella."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-finger-nth.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.delete",
            product: "2"
          }), ": Permite eliminar una huella digital inscrita. Seleccione el número de huella digital que desea eliminar y haga clic."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.chkDuplicated",
            product: "2"
          }), ": Verifique si la huella digital ya está inscrita."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.duress",
            product: "2"
          }), ": Para inscribir una huella digital como ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#duress",
            children: "huella digital de coacción"
          }), ", seleccione esta opción y escanee la huella. Si lo amenazan o lo obligan a abrir la puerta, use esa huella digital para enviar una notificación."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No use la huella digital que utiliza para el acceso diario como huella de coacción."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al activar la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.viewImage",
              product: "2"
            }), ", se muestra la imagen de la huella digital, pero no se almacena en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si la tasa de autenticación de huella digital es baja, elimine la huella digital y inscriba una nueva."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Cubra toda la superficie del sensor de reconocimiento de huellas digitales con el dedo para obtener una huella de buena calidad. Utilice las huellas digitales del dedo índice o medio."
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(32830)/* ["default"] */.A) + "",
              width: "400",
              height: "98"
            })
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
32830: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/biostarx-enroll-fingerprint-caution-98024b8eaea33e83eea204e7e06a1e0f.png");

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