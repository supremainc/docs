"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["27076"], {
65975: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_system_restore_mdx_f38_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-system-restore-mdx-f38.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_system_restore_mdx_f38_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-system-restore","title":"Restauración del sistema","description":"Esta guía explica cómo restaurar la base de datos, la configuración, las licencias, etc. de BioStar X a un estado anterior mediante un archivo de copia de seguridad del sistema.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-system-restore.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-system-restore","permalink":"/docs/es/platform/biostar_x/settings-system-system-restore","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-system-restore.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-system-restore","title":"Restauración del sistema","description":"Esta guía explica cómo restaurar la base de datos, la configuración, las licencias, etc. de BioStar X a un estado anterior mediante un archivo de copia de seguridad del sistema.","keywords":["Restauración del sistema","restaurar","Restaurar copia de seguridad","Recuperación de datos","Restauración de BioStar X"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Respaldo de Sistema","permalink":"/docs/es/platform/biostar_x/settings-system-system-backup"},"next":{"title":"Mejorar la seguridad del sistema","permalink":"/docs/es/platform/biostar_x/settings-system-security"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-system-restore.mdx


const frontMatter = {
	id: 'settings-system-system-restore',
	title: 'Restauración del sistema',
	description: 'Esta guía explica cómo restaurar la base de datos, la configuración, las licencias, etc. de BioStar X a un estado anterior mediante un archivo de copia de seguridad del sistema.',
	keywords: [
		'Restauración del sistema',
		'restaurar',
		'Restaurar copia de seguridad',
		'Recuperación de datos',
		'Restauración de BioStar X'
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
    code: "code",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {IcInfo, Image, Start} = _components;
  if (!IcInfo) _missingMdxReference("IcInfo", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use un archivo de copia de seguridad del sistema para restaurar cuando haya un problema con ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " o necesite volver a un estado anterior. La función de restauración permite devolver la base de datos, varias configuraciones y la información de licencias al estado del momento de la copia de seguridad."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Realice la operación de restauración para devolver los datos actuales al punto de la copia de seguridad. Se recomienda crear una copia de seguridad del estado actual antes de restaurar. Consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-system-backup",
              children: "lo siguiente"
            }), " para crear una copia de seguridad del estado actual."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si la dirección IP del servidor de destino de la restauración difiere de la dirección IP del servidor de copia de seguridad durante la operación de restauración, el proceso puede fallar. Verifique la dirección IP del servidor antes de continuar con la operación de restauración."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si la base de datos de SQL Server y ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " están instalados en servidores diferentes, no se puede usar la copia de seguridad y restauración del sistema de ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En Windows, ejecute ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Restore"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Ruta del programa: ", (0,jsx_runtime.jsx)(_components.em, {
              children: "C:\\Program Files\\BioStar X\\biostar-restore.exe"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Select File"
          }), " y elija el archivo de copia de seguridad que desea restaurar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/setting-system-restore.png",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Restore"
          }), " para iniciar la restauración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando aparezca el mensaje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Starting Biostar services...Done"
      }), ", la restauración habrá finalizado. Acceda a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " para verificar los datos restaurados."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La restauración no puede continuar si la versión de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " en el momento de la copia de seguridad es diferente de la versión actual. Haga clic en ", (0,jsx_runtime.jsx)(IcInfo, {}), " en la esquina superior derecha de la pantalla para comprobar la versión de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-system-restore-check-ver.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para comprobar la versión de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " en el momento de la copia de seguridad, extraiga el archivo de copia de seguridad y verifique el valor ", (0,jsx_runtime.jsx)(_components.code, {
              children: "biostarVersion"
            }), " en el archivo ", (0,jsx_runtime.jsx)(_components.em, {
              children: "sysbackup.conf"
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