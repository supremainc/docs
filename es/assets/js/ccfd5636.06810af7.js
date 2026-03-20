"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["97986"], {
25203: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_elevator_set_floor_access_mdx_ccf_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-elevator-set-floor-access-mdx-ccf.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_elevator_set_floor_access_mdx_ccf_namespaceObject = JSON.parse('{"id":"platform/biostar_air/elevator-set-floor-access","title":"Establecer permisos de acceso por piso","description":"Registre un elevador y especifique a qué pisos pueden acceder los usuarios y los grupos. Defina los niveles de piso y aplique horarios y políticas de días festivos para controlar el acceso a cada piso.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/elevator-set-floor-access.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/elevator-set-floor-access","permalink":"/docs/es/platform/biostar_air/elevator-set-floor-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/elevator-set-floor-access.mdx","tags":[],"version":"current","frontMatter":{"id":"elevator-set-floor-access","title":"Establecer permisos de acceso por piso","description":"Registre un elevador y especifique a qué pisos pueden acceder los usuarios y los grupos. Defina los niveles de piso y aplique horarios y políticas de días festivos para controlar el acceso a cada piso.","keywords":["Permisos de acceso por piso","Elevador","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Administrar Elevadores","permalink":"/docs/es/platform/biostar_air/elevator-add-edit-delete"},"next":{"title":"Permisos de acceso","permalink":"/docs/es/platform/biostar_air/manage-access-authority"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/elevator-set-floor-access.mdx


const frontMatter = {
	id: 'elevator-set-floor-access',
	title: 'Establecer permisos de acceso por piso',
	description: 'Registre un elevador y especifique a qué pisos pueden acceder los usuarios y los grupos. Defina los niveles de piso y aplique horarios y políticas de días festivos para controlar el acceso a cada piso.',
	keywords: [
		'Permisos de acceso por piso',
		'Elevador',
		'BioStar Air'
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
    blockquote: "blockquote",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Registre un elevador y defina niveles de piso para restringir el acceso de usuarios y grupos a determinados pisos. Para cada nivel de piso, establezca horarios de acceso (p. ej., durante el horario laboral) y políticas de días festivos para gestionar la seguridad y la accesibilidad."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_title_add_button",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add-floor.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_floor_levels_add_floors_title",
            product: "air"
          }), " panel, ingrese ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_list_column_name",
            product: "air"
          }), " y (opcional) ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_floor_levels_description_column",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Por ejemplo: equipo de seguridad, personal de limpieza"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add-floor-config.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_floor_levels_add_floors",
            product: "air"
          }), ", seleccione los pisos a los que se aplicará el nivel de piso."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_label",
            product: "air"
          }), ", establezca el horario de acceso."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Por ejemplo, permitir que el personal de limpieza acceda únicamente fuera del horario laboral."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si es necesario, agregue ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_label_holiday_grp",
            product: "air"
          }), " para restringir el acceso en fechas específicas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para agregar el nivel de piso."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre cómo agregar, editar o eliminar niveles de piso, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/manage-floor-level"
        }), "."]
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