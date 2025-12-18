"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6807"], {
4026: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_extendedmodule_sc_installation_mdx_7ca_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-extendedmodule-sc-installation-mdx-7ca.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_extendedmodule_sc_installation_mdx_7ca_namespaceObject = JSON.parse('{"id":"device/extendedmodule_sc/installation","title":"Instalación","description":"Ofrece los procedimientos completos de instalación y ejemplos de conexión necesarios para el dispositivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/extendedmodule_sc/installation.mdx","sourceDirName":"device/extendedmodule_sc","slug":"/device/extendedmodule_sc/installation","permalink":"/docs/es/device/extendedmodule_sc/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/extendedmodule_sc/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"Instalación","description":"Ofrece los procedimientos completos de instalación y ejemplos de conexión necesarios para el dispositivo.","keywords":["Soporte","Alimentación","Red","Entrada","Relé","Independiente","E/S Segura","Wiegand"],"isTranslationMissing":false},"sidebar":"extendedmodule_sc","previous":{"title":"Primeros pasos","permalink":"/docs/es/device/extendedmodule_sc/getting-started"},"next":{"title":"Especificaciones del producto","permalink":"/docs/es/device/extendedmodule_sc/product-specifications"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/extendedmodule_sc/installation.mdx


const frontMatter = {
	id: 'installation',
	title: 'Instalación',
	description: 'Ofrece los procedimientos completos de instalación y ejemplos de conexión necesarios para el dispositivo.',
	keywords: [
		'Soporte',
		'Alimentación',
		'Red',
		'Entrada',
		'Relé',
		'Independiente',
		'E/S Segura',
		'Wiegand'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Instalar en BioStation 3",
  "id": "instalar-en-biostation-3",
  "level": 2
}, {
  "value": "Instalar en BioStation 2a",
  "id": "instalar-en-biostation-2a",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Ofrece los procedimientos completos de instalación y ejemplos de conexión necesarios para el dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instalar-en-biostation-3",
      children: "Instalar en BioStation 3"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Instale el módulo de expansión en el producto: se requiere un soporte de expansión (se vende por separado)."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Contacte a su distribuidor de productos Supremma para adquirir el soporte de expansión."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifique la posición en el soporte de expansión para colocar el módulo de expansión y fíjelo con tornillos de sujeción."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm-sc1.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Conecte el cable que desee usar al módulo de expansión y colóquelo en la ranura inferior para organizarlo."
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Como se muestra en la imagen, mantenga el cable USB MAIN dentro y dirija los cables RS-232C y RS-485 por la parte posterior a través de la ranura inferior."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm-sc2.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "Si es necesario, doble las partes indicadas con cortadores o pinzas para ampliar el espacio para el cableado."
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/installation-bs3-extm3.svg",
            className: "none",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Instale la cubierta de goma de silicona para ajustarla alrededor del módulo de expansión."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm-sc4.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Instale la cubierta de goma de silicona después de conectar los cables para cumplir con la clasificación IP65."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Coloque la cinta doble cara incluida en la parte posterior del soporte de expansión y asegúrelo en su lugar. Luego, utilice tornillos de sujeción para fijar firmemente el soporte de expansión."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm5.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "La altura óptima para instalar el dispositivo es 136 cm."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "No instale el dispositivo en un lugar expuesto directamente a la luz solar o a los rayos ultravioleta."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Ajuste la posición de instalación para que el rostro no esté expuesto a la luz solar directa cuando el usuario intente autenticarse."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Asegure el soporte de pared con tornillos de sujeción encima del soporte de expansión."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm6.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Conecte el producto y el cable USB MAIN, y monte la cubierta del cable."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm-sc7.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Use la cubierta del cable después de conectar el producto y los cables para cumplir con las clasificaciones IP65 de resistencia al agua y al polvo."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Monte el producto en el soporte de pared fijado."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm8.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Apriete los tornillos de sujeción del producto para unir el producto con el soporte de pared."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm9.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Al ensamblar el producto con el soporte, puedes usar el tornillo de fijación del soporte incluido (en forma de estrella) en lugar del tornillo de fijación del producto para aumentar la seguridad."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instalar-en-biostation-2a",
      children: "Instalar en BioStation 2a"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use la plantilla de perforación proporcionada para determinar la posición de montaje del soporte de pared. Asegure firmemente el soporte de pared con tornillos de sujeción en el lugar donde se montará el producto."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device1-bs2a.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Conecte el cable USB MAIN al producto y verifique la posición para instalar el módulo de expansión antes de fijarlo con tornillos de sujeción."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs2a-extm-sc1.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Conecte el cable que desee usar al módulo de expansión y colóquelo en la ranura inferior para organizarlo."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs2a-extm-sc2.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Después de montar la cubierta del cable, instale el producto en el soporte de pared fijado."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs2a-extm-sc3.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Use la cubierta del cable después de conectar el producto y los cables para cumplir con las clasificaciones IP65 de resistencia al agua y al polvo."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Apriete los tornillos de sujeción del producto para unir el producto con el soporte de pared."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device3-bs2a.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Al ensamblar el producto con el soporte, puedes usar el tornillo de fijación del soporte incluido (en forma de estrella) en lugar del tornillo de fijación del producto para aumentar la seguridad."
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