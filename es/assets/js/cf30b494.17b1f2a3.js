"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["57437"], {
11940: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_view_user_by_access_mdx_cf3_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-view-user-by-access-mdx-cf3.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_view_user_by_access_mdx_cf3_namespaceObject = JSON.parse('{"id":"platform/biostar_x/view-user-by-access","title":"Administrar grupos de acceso","description":"Esta guía muestra cómo consultar usuarios por grupo de acceso y explorar la estructura de permisos de acceso.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/view-user-by-access.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/view-user-by-access","permalink":"/docs/es/platform/biostar_x/view-user-by-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/view-user-by-access.mdx","tags":[],"version":"current","frontMatter":{"id":"view-user-by-access","title":"Administrar grupos de acceso","description":"Esta guía muestra cómo consultar usuarios por grupo de acceso y explorar la estructura de permisos de acceso.","keywords":["Usuario","Permiso de acceso"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Exportar/Importar Información De Usuarios","permalink":"/docs/es/platform/biostar_x/export-import-user-info"},"next":{"title":"Iniciar sesión con autenticación multifactor","permalink":"/docs/es/platform/biostar_x/login-with-mfa"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/view-user-by-access.mdx


const frontMatter = {
	id: 'view-user-by-access',
	title: 'Administrar grupos de acceso',
	description: 'Esta guía muestra cómo consultar usuarios por grupo de acceso y explorar la estructura de permisos de acceso.',
	keywords: [
		'Usuario',
		'Permiso de acceso'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Consulta usuarios por grupo de acceso",
  "id": "view-user-by-access",
  "level": 2
}, {
  "value": "Conoce la estructura de árbol",
  "id": "learn-tree-view",
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
  }, {Cmd, IcAdd, IcMinus, Image, Treeview} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcMinus) _missingMdxReference("IcMinus", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Treeview) _missingMdxReference("Treeview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Esta guía muestra cómo consultar y administrar usuarios basados en grupos de acceso. Usa ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.accessExplorer"
      }), " para verificar los usuarios registrados por grupo de acceso y explorar la jerarquía de permisos de acceso mediante la estructura de árbol."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Configura la función de control de acceso para verificar las puertas o pisos que pertenecen a un grupo de acceso en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "team.tree.accessExplorer"
        }), ". Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-access-control",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-user-by-access",
      children: "Consulta usuarios por grupo de acceso"
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.accessExplorer"
          }), " en el menú de la estructura de árbol."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-access-explorer.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el grupo de permisos de acceso deseado en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.accessExplorerRootName"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puedes ver los usuarios que pertenecen al grupo de permisos de acceso seleccionado en la lista de usuarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAdd, {}), " o ", (0,jsx_runtime.jsx)(IcMinus, {}), " para expandir o contraer los niveles de acceso o de piso bajo el grupo de acceso."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learn-tree-view",
      children: "Conoce la estructura de árbol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El menú de la estructura de árbol se compone de la siguiente jerarquía."
    }), "\n", (0,jsx_runtime.jsx)(Treeview, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["El ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "grupo de acceso"
          }), " es la capa superior que incluye niveles de acceso, niveles de piso, grupos de usuarios y usuarios. Puedes administrar los permisos de acceso a través del ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "grupo de acceso"
          }), ". Para obtener más información sobre cómo crear grupos de acceso, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control-manage-access-group",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["El ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "nivel de acceso"
          }), " define los horarios en los que los usuarios pueden ingresar y concede permiso para acceder a las puertas durante ese periodo. Para obtener más información sobre cómo crear niveles de acceso, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control-manage-access-level",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Puedes gestionar los pisos a los que los usuarios pueden acceder mediante ascensores a través del ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "nivel de piso"
          }), ". Para obtener más información sobre cómo crear niveles de piso, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control-manage-floor-level",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["El ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "horario"
          }), " es una función que opera de forma eficaz el control de acceso y la gestión de asistencia mediante la configuración de horarios de acceso y festivos. Para obtener más información sobre cómo registrar horarios, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-schedule",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Puedes registrar ascensores y gestionar los pisos accesibles a través de ellos. Para obtener más información sobre la incorporación de ascensores, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-elevators-add",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La función de registro de ascensores está disponible como opción adicional para licencias ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " y superiores. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "lo siguiente"
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