"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8598"], {
96259: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_migration_face_mdx_d2f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-migration-face-mdx-d2f.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_migration_face_mdx_d2f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/migration-face","title":"Migracion Visual Face","description":"Actualice las caras registradas en la versión anterior de BioStar X para mejorar el rendimiento de autenticación mediante el algoritmo más reciente.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/migration-face.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/migration-face","permalink":"/docs/es/platform/biostar_x/migration-face","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/migration-face.mdx","tags":[],"version":"current","frontMatter":{"id":"migration-face","title":"Migracion Visual Face","description":"Actualice las caras registradas en la versión anterior de BioStar X para mejorar el rendimiento de autenticación mediante el algoritmo más reciente.","keywords":["Rostro","Migración","Autenticación facial"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Inscribir rostros por lotes","permalink":"/docs/es/platform/biostar_x/batch-import-face"},"next":{"title":"Configurar permisos de apertura de emergencia","permalink":"/docs/es/platform/biostar_x/lockoverride"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/migration-face.mdx


const frontMatter = {
	id: 'migration-face',
	title: 'Migracion Visual Face',
	description: 'Actualice las caras registradas en la versión anterior de BioStar X para mejorar el rendimiento de autenticación mediante el algoritmo más reciente.',
	keywords: [
		'Rostro',
		'Migración',
		'Autenticación facial'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Antes de comenzar",
  "id": "antes-de-comenzar",
  "level": 2
}, {
  "value": "Dispositivos y versiones de firmware compatibles",
  "id": "dispositivos-y-versiones-de-firmware-compatibles",
  "level": 3
}, {
  "value": "Notas sobre los tipos de plantillas faciales",
  "id": "notas-sobre-los-tipos-de-plantillas-faciales",
  "level": 3
}, {
  "value": "Avisos relacionados con dispositivos",
  "id": "avisos-relacionados-con-dispositivos",
  "level": 3
}, {
  "value": "Cómo realizar la migración de caras",
  "id": "cómo-realizar-la-migración-de-caras",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Actualice las caras registradas en la versión anterior de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " para mejorar el rendimiento de autenticación mediante el algoritmo más reciente. El protocolo de sincronización se ha mejorado para transmitir solo plantillas, excluyendo las imágenes reales durante la sincronización de usuarios. Además, esto ayuda a reducir significativamente el tiempo de sincronización y a prevenir problemas relacionados con la privacidad."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Antes de ejecutar la función de migración de caras, revise los siguientes puntos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "¿Qué es la migración de caras?"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Es una función que genera dos tipos de plantillas faciales a partir de las imágenes de usuario ya almacenadas en el servidor de BioStar X. Ejecute ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "team.menu.faceMigration"
        }), " para sincronizar solo la plantilla de autenticación facial durante la sincronización de usuarios."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispositivos-y-versiones-de-firmware-compatibles",
      children: "Dispositivos y versiones de firmware compatibles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consulte la lista a continuación para conocer los dispositivos que pueden sincronizar la cara con la plantilla."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Firmware FaceStation F2 v2.2.0 o posterior"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Firmware BioStation 3 v1.3.1 o posterior"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Firmware BioEntry W3 v1.0.0 o posterior"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Aviso sobre el fin de soporte del firmware FaceStation F2 v1.x.x"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " optimizó el rendimiento de la sincronización al cambiar para enviar solo plantillas al sincronizar la cara del usuario con el dispositivo. Por lo tanto, el soporte para el firmware FaceStation F2 v1.x.x, que solo puede extraer plantillas desde el dispositivo, se descontinuará. Si actualmente utiliza el firmware FaceStation F2 versión 1.x.x, actualice al firmware más reciente para usar ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " con FaceStation F2."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Puede descargar el firmware más reciente desde el ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com/",
          children: "Centro de descargas de Suprema"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notas-sobre-los-tipos-de-plantillas-faciales",
      children: "Notas sobre los tipos de plantillas faciales"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diferencias en los tipos de plantillas faciales para FaceStation F2, BioStation 3 y BioEntry W3."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tipo NPU"
          }), ": BioStation 3, BioEntry W3"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tipo GPU"
          }), ": FaceStation F2"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tiempo de sincronización entre dispositivos con diferentes tipos de plantillas faciales"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Antes de continuar con ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.faceMigration"
            }), ", si sincroniza añadiendo BioStation 3 o BioEntry W3 a un entorno que solo utilizaba FaceStation F2, el tipo de plantilla será diferente y se extraerá la plantilla tipo NPU a partir de la imagen, lo que puede tardar bastante tiempo según la cantidad de caras registradas en el servidor."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recomendaciones para registrar caras en BioStar X"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al registrar caras sin usar la opción ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Store Face Image"
            }), " en el dispositivo, solo se sincroniza la plantilla con ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ". Como resultado, no se puede sincronizar a dispositivos con tipos de plantillas faciales diferentes. Por lo tanto, se recomienda registrar las caras mediante ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avisos-relacionados-con-dispositivos",
      children: "Avisos relacionados con dispositivos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El archivo de datos de usuario exportado desde ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " contiene solo plantillas sin imágenes, por lo que no se puede importar en FaceStation F2 y BioStation 3 que utilizan firmware existente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Al exportar archivos de datos desde FaceStation F2 y BioStation 3, los archivos solo se pueden exportar con versiones de firmware superiores a las siguientes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Firmware FaceStation F2 v2.2.0 o posterior"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Firmware BioStation 3 v1.3.1 o posterior"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Al utilizar FaceStation F2 o BioStation 3, se recomienda actualizar a la versión de firmware más reciente. Puede descargar el firmware más reciente desde el ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com/",
          children: "Centro de descargas de Suprema"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cómo-realizar-la-migración-de-caras",
      children: "Cómo realizar la migración de caras"
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
          children: ["Seleccione ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la esquina superior derecha de la pantalla y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.faceMigration"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-migration.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Revise el contenido de la ventana emergente de advertencia y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.continue"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-migration-warning.png",
          width: "60%"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Migración de caras en curso. Cuando la migración de caras finalice, aparecerá una ventana emergente con los resultados. Mostrará el número total de caras registradas, así como la cantidad de caras migradas correctamente y las que fallaron."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de una migración exitosa, sincronice la información del usuario con el dispositivo para aplicar los cambios. Para obtener más información sobre cómo enviar la información del usuario al dispositivo, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "transfer-user-info-to-device",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si la migración de caras falla, descargue una lista de usuarios fallidos en un archivo CSV. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), " para eliminar todas las caras cuya migración falló."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Solo la cuenta de administrador con ID de usuario ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            }), " puede usar esta función."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No salga de la página actual mientras la migración esté en curso."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Cuanto mayor sea el tamaño de las imágenes faciales registradas por usuario, más tiempo tomará generar las plantillas."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Para aproximadamente 1,000 caras, el proceso tarda alrededor de 18 minutos, aunque puede variar según el rendimiento del servidor."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo guardar solo la plantilla sin guardar la imagen facial del usuario en el servidor, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#storevisualfaceimage",
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