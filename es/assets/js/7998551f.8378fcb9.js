"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["86420"], {
60690: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_custom_wiegand_card_formats_mdx_799_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-custom-wiegand-card-formats-mdx-799.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_custom_wiegand_card_formats_mdx_799_namespaceObject = JSON.parse('{"id":"platform/biostar_air/custom-wiegand-card-formats","title":"Formato de tarjeta Wiegand personalizado","description":"Cree y configure un formato de tarjeta Wiegand personalizado en BioStar Air v2.10, incluyendo códigos de instalación, segmentos de ID, bits de paridad y asignación de bits, para migrar sin contratiempos desde un sistema de control de acceso existente.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/custom-wiegand-card-formats.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/custom-wiegand-card-formats","permalink":"/docs/es/platform/biostar_air/custom-wiegand-card-formats","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/custom-wiegand-card-formats.mdx","tags":[],"version":"current","frontMatter":{"id":"custom-wiegand-card-formats","title":"Formato de tarjeta Wiegand personalizado","description":"Cree y configure un formato de tarjeta Wiegand personalizado en BioStar Air v2.10, incluyendo códigos de instalación, segmentos de ID, bits de paridad y asignación de bits, para migrar sin contratiempos desde un sistema de control de acceso existente.","keywords":["Wiegand","Formato de tarjeta","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configurar alertas y informes","permalink":"/docs/es/platform/biostar_air/settings-alert-report"},"next":{"title":"Tiempo y asistencia (T&A)","permalink":"/docs/es/platform/biostar_air/configuring-ta"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/custom-wiegand-card-formats.mdx


const frontMatter = {
	id: 'custom-wiegand-card-formats',
	title: 'Formato de tarjeta Wiegand personalizado',
	description: 'Cree y configure un formato de tarjeta Wiegand personalizado en BioStar Air v2.10, incluyendo códigos de instalación, segmentos de ID, bits de paridad y asignación de bits, para migrar sin contratiempos desde un sistema de control de acceso existente.',
	keywords: [
		'Wiegand',
		'Formato de tarjeta',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Lista de formatos de tarjeta Wiegand",
  "id": "cardFormatMenu",
  "level": 2
}, {
  "value": "Agregar un formato de tarjeta",
  "id": "agregar-un-formato-de-tarjeta",
  "level": 2
}, {
  "value": "Editar formato de tarjeta",
  "id": "editCardFormat",
  "level": 2
}, {
  "value": "Eliminar formato de tarjeta",
  "id": "deleteCardFormat",
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
  }, {Cmd, IcAirRemove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Cree y configure un formato de tarjeta Wiegand personalizado en BioStar Air v2.10, incluyendo códigos de instalación, segmentos de ID, bits de paridad y asignación de bits, para migrar sin contratiempos desde un sistema de control de acceso existente."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cardFormatMenu",
      children: "Lista de formatos de tarjeta Wiegand"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_format_submenu",
        product: "air"
      }), " en la barra lateral izquierda. Cree, administre y vea formatos especiales de tarjeta, incluidos los formatos Wiegand, SIA y HID. Resulta útil para sitios que migran desde una solución de control de acceso existente con tarjetas emitidas previamente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-card-format.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vea todos los formatos de tarjeta Wiegand registrados, incluidos los predeterminados de BioStar Air."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Revise el nombre, la descripción, el total de bits, la vista previa y la asignación detallada de bits del formato."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure un nuevo formato de tarjeta personalizado, incluyendo su nombre, descripción, total de bits y la asignación detallada de bits. El sistema ofrece una vista previa de los bits para su verificación visual."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agregar-un-formato-de-tarjeta",
      children: "Agregar un formato de tarjeta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agregue un nuevo formato de tarjeta Wiegand personalizado además de los formatos integrados."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_format_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_title_popup_add",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_title_popup_add",
            product: "air"
          }), ", ingrese el nombre, la descripción opcional y el número total de bits en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_label_detail",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-card-format-add-wiegand.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese el número total de bits para activar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_label_bit_preview",
            product: "air"
          }), ", luego configure la asignación de bits en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_label_bit_assignment",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-card-format-add-wiegand-assign-bit.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_bit_preview_facility_code",
                product: "air"
              }), ": Haga clic en el interruptor para activar el código de instalación. Ingrese ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_start_bit",
                product: "air"
              }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_end_bit",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_bit_preview_id",
                product: "air"
              }), ": Especifique los bits de inicio y fin para agregar uno o más segmentos de ID."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_bit_preview_parity_bit",
                product: "air"
              }), ": Especifique los bits de inicio y fin para agregar bits de paridad impar o par."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para agregar el nuevo formato de tarjeta."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editCardFormat",
      children: "Editar formato de tarjeta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga estos pasos para editar un formato de tarjeta Wiegand existente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_format_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en el formato de tarjeta para editarlo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_title_popup_edit",
            product: "air"
          }), ", edite los campos requeridos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-card-format-edit-wiegand.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar el formato de tarjeta editado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteCardFormat",
      children: "Eliminar formato de tarjeta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_format_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en la casilla de verificación del formato de tarjeta que desea eliminar. Seleccione uno o más formatos de tarjeta."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " en la parte superior de la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensaje, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_yes",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "No se pueden eliminar los cinco formatos de tarjeta Wiegand integrados."
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