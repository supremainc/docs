"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41461"], {
50811: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_system_backup_mdx_fd5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-system-backup-mdx-fd5.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_system_backup_mdx_fd5_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-system-backup","title":"Respaldo de Sistema","description":"Realice copias de seguridad de información clave, como la base de datos de **BioStar X**, diversos ajustes y claves, mediante el menú de copia de seguridad del sistema.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-system-backup.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-system-backup","permalink":"/docs/es/platform/biostar_x/settings-system-system-backup","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-system-backup.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-system-backup","title":"Respaldo de Sistema","description":"Realice copias de seguridad de información clave, como la base de datos de **BioStar X**, diversos ajustes y claves, mediante el menú de copia de seguridad del sistema.","keywords":["Respaldo de Sistema","copia de seguridad","Copia de seguridad automática","Copia de seguridad manual","Protección de datos","Restaurar"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Registro auditoría","permalink":"/docs/es/platform/biostar_x/settings-system-audit-trail"},"next":{"title":"Restauración del sistema","permalink":"/docs/es/platform/biostar_x/settings-system-system-restore"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-system-backup.mdx


const frontMatter = {
	id: 'settings-system-system-backup',
	title: 'Respaldo de Sistema',
	description: 'Realice copias de seguridad de información clave, como la base de datos de **BioStar X**, diversos ajustes y claves, mediante el menú de copia de seguridad del sistema.',
	keywords: [
		'Respaldo de Sistema',
		'copia de seguridad',
		'Copia de seguridad automática',
		'Copia de seguridad manual',
		'Protección de datos',
		'Restaurar'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Copia de seguridad manual",
  "id": "copia-de-seguridad-manual",
  "level": 2
}, {
  "value": "Configuración de copia de seguridad automática",
  "id": "configuración-de-copia-de-seguridad-automática",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Realice copias de seguridad de información clave, como la base de datos de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", diversos ajustes y claves. Utilice la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.backup",
        product: "2"
      }), " para evitar la pérdida de datos en el servidor o al transferirlos a un nuevo equipo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los métodos de copia de seguridad compatibles son los siguientes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Copia de seguridad manual"
          }), ": El usuario crea el archivo de copia de seguridad manualmente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Copia de seguridad automática"
          }), ": El sistema crea archivos de copia de seguridad automáticamente en intervalos predefinidos."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al restaurar ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " desde un archivo de copia de seguridad creado en un equipo anterior a uno nuevo, vuelva a emitir la licencia."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si la base de datos de SQL Server y ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " están instalados en servidores diferentes, no se puede usar la copia de seguridad y restauración del sistema de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para más información sobre la restauración del sistema, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-system-restore",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "copia-de-seguridad-manual",
      children: "Copia de seguridad manual"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los usuarios pueden crear archivos de copia de seguridad de forma manual."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup",
            product: "2"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.general",
            product: "2"
          }), ", configure la ruta para guardar el archivo de copia de seguridad y el número máximo de archivos de copia de seguridad."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-system-backup-general.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.filePath",
                product: "2"
              }), ": Ingrese la ruta donde se guardará el archivo de copia de seguridad. Ingrese una ruta de directorio que ya exista para la ubicación de guardado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.numberFileToKeep",
                product: "2"
              }), ": Defina el número máximo de archivos de copia de seguridad."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para crear un archivo de copia de seguridad, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "backup.backupNow",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los archivos de copia de seguridad se guardan en formato ", (0,jsx_runtime.jsx)(_components.em, {
        children: "zip"
      }), " en la ruta especificada en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "backup.filePath",
        product: "2"
      }), ". El nombre del archivo se genera con el formato ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BioStar_X_Backup_YYYYMMDD_HHMMSS.zip"
      }), ". Aquí, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYYMMDD"
      }), " representa la fecha de la copia de seguridad y ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HHMMSS"
      }), " representa la hora."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si se supera el número máximo de copias de seguridad, los archivos de copia de seguridad más antiguos se eliminan automáticamente."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "backup.numberFileToKeep",
              product: "2"
            }), ", solo se ingresan números entre 1 y 100."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-de-copia-de-seguridad-automática",
      children: "Configuración de copia de seguridad automática"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cuando configure la copia de seguridad automática, el sistema creará archivos de copia de seguridad en intervalos predefinidos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup",
            product: "2"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.autoBackup",
            product: "2"
          }), ", seleccione la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.frequency",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-system-backup-automatic.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.daily",
                product: "2"
              }), ": Realiza copias de seguridad diariamente de forma automática. Configure la hora de la copia de seguridad en la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.weekly",
                product: "2"
              }), ": Realiza copias de seguridad semanalmente de forma automática. Configure el día para la copia de seguridad automática en la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.day",
                product: "2"
              }), " y establezca la hora en la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.monthly",
                product: "2"
              }), ": Realiza copias de seguridad mensualmente de forma automática. Configure la fecha para la copia de seguridad automática en la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.date",
                product: "2"
              }), " y establezca la hora en la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los archivos de copia de seguridad se guardan en formato ", (0,jsx_runtime.jsx)(_components.em, {
        children: "zip"
      }), " en la ruta especificada en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "backup.filePath",
        product: "2"
      }), " de la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.backup.general",
        product: "2"
      }), ". El nombre del archivo se genera con el formato ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BioStar_X_Backup_YYYYMMDD_HHMMSS.zip"
      }), ". Aquí, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYYMMDD"
      }), " representa la fecha de la copia de seguridad y ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HHMMSS"
      }), " representa la hora."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si selecciona la frecuencia de copia de seguridad automática como ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "backup.monthly",
              product: "2"
            }), " y establece la fecha en 29, 30 o 31, no se realizarán copias de seguridad automáticas en los meses que no tengan ese día."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La hora se basa en la zona horaria estándar configurada en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.preferences.root"
            }), ". Para más información sobre la configuración de la zona horaria, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-preferences#language-timezone",
              children: "lo siguiente"
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