"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["36349"], {
62141: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_check_ethernet_mdx_f5d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-check-ethernet-mdx-f5d.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_check_ethernet_mdx_f5d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-ethernet","title":"Verificar la prioridad de red","description":"Instrucciones para verificar y configurar la prioridad de red del servidor antes de instalar BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/check-ethernet.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-ethernet","permalink":"/docs/es/platform/biostar_x/check-ethernet","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-ethernet.mdx","tags":[],"version":"current","frontMatter":{"id":"check-ethernet","title":"Verificar la prioridad de red","description":"Instrucciones para verificar y configurar la prioridad de red del servidor antes de instalar BioStar X.","keywords":["Red","BioStar X"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Primeros pasos","permalink":"/docs/es/platform/biostar_x/getting-started"},"next":{"title":"Instalación Exprés","permalink":"/docs/es/platform/biostar_x/express-install"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/check-ethernet.mdx


const frontMatter = {
	id: 'check-ethernet',
	title: 'Verificar la prioridad de red',
	description: 'Instrucciones para verificar y configurar la prioridad de red del servidor antes de instalar BioStar X.',
	keywords: [
		'Red',
		'BioStar X'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "¿Cuándo se necesita?",
  "id": "cuándo-se-necesita",
  "level": 2
}, {
  "value": "Verificar la prioridad de red",
  "id": "verificar-la-prioridad-de-red",
  "level": 2
}, {
  "value": "Verificar en el símbolo del sistema",
  "id": "verificar-en-el-símbolo-del-sistema",
  "level": 3
}, {
  "value": "Verificar la información del adaptador de red",
  "id": "verificar-la-información-del-adaptador-de-red",
  "level": 3
}, {
  "value": "Cambiar la prioridad de red",
  "id": "cambiar-la-prioridad-de-red",
  "level": 2
}, {
  "value": "Abrir la configuración de red",
  "id": "abrir-la-configuración-de-red",
  "level": 3
}, {
  "value": "Abrir las opciones del adaptador",
  "id": "abrir-las-opciones-del-adaptador",
  "level": 3
}, {
  "value": "Configuración de métrica",
  "id": "configuración-de-métrica",
  "level": 3
}, {
  "value": "Verificar la configuración",
  "id": "verificar-la-configuración",
  "level": 3
}, {
  "value": "Solución de problemas",
  "id": "solución-de-problemas",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, NextItem, NextStep, Step, Steps} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instrucciones para verificar y configurar la prioridad de red del servidor antes de instalar ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cuándo-se-necesita",
      children: "¿Cuándo se necesita?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Debe verificar y configurar la prioridad de red en las siguientes situaciones."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando el servidor tiene instalados dos o más adaptadores de red (tarjetas LAN)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando un adaptador de red específico debe utilizarse para el servicio de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para evitar problemas de conexión de red después de instalar ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si ninguna de las situaciones anteriores aplica, no es necesario cambiar la prioridad de red. Omita este paso y continúe con la instalación de ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". Para obtener más información sobre la instalación de ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "express-install",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Durante la instalación de ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ", se seleccionará automáticamente el adaptador de red con una métrica más baja (mayor prioridad). Como puede ser difícil cambiar esta configuración después de la instalación, asegúrese de verificar y ajustar la prioridad de red antes de la instalación."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verificar-la-prioridad-de-red",
      children: "Verificar la prioridad de red"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verificar-en-el-símbolo-del-sistema",
      children: "Verificar en el símbolo del sistema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Busque ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cmd"
          }), " en el menú ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Inicio"
          }), " y ejecute ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Símbolo del sistema"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ingrese el siguiente comando."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cmd",
            children: "route print\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Busque entradas en la sección ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IPv4 Route Table"
          }), " donde ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network Destination"
          }), " sea ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.0.0.0"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifique el valor en la columna ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Metric"
          }), ". Cuanto menor sea el valor, mayor será la prioridad."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Salida de ejemplo:"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-install-check-network-cmd.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el ejemplo anterior, la interfaz ", (0,jsx_runtime.jsx)(_components.code, {
        children: "192.168.40.123"
      }), " tiene un valor de métrica de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "20"
      }), ", lo que resulta en una prioridad más alta."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verificar-la-información-del-adaptador-de-red",
      children: "Verificar la información del adaptador de red"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verifique qué adaptador de red corresponde a cada interfaz."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la ventana del ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Símbolo del sistema"
          }), ", ingrese el siguiente comando."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cmd",
            children: "ipconfig /all\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Empareje la ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "dirección IPv4"
          }), " de cada adaptador de red con la dirección ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Gateway"
          }), " identificada anteriormente para determinar de cuál se trata."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cambiar-la-prioridad-de-red",
      children: "Cambiar la prioridad de red"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para aumentar la prioridad del adaptador de red deseado, siga los pasos a continuación."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Los siguientes pasos están basados en Windows 11. La ubicación del menú puede variar según la versión de Windows que esté utilizando."
      })
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "abrir-la-configuración-de-red",
          children: "Abrir la configuración de red"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En el menú ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Inicio"
              }), ", escriba ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ver conexiones de red"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-start-network-search.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ver conexiones de red"
              }), " en los resultados de la búsqueda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Haga doble clic en el adaptador conectado a Internet en la lista."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-control-network-connections.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "abrir-las-opciones-del-adaptador",
          children: "Abrir las opciones del adaptador"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Estado de Ethernet"
              }), ", haga clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Propiedades"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-ethernet-status.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana Propiedades de Ethernet, seleccione ", (0,jsx_runtime.jsx)("b", {
                children: "Protocolo de Internet versión 4 (TCP/IPv4)"
              }), " en la lista."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-ethernet-properties.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Propiedades"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Propiedades de Protocolo de Internet versión 4 (TCP/IPv4)"
              }), ", haga clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Avanzado"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-protocol-properties.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configuración-de-métrica",
          children: "Configuración de métrica"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Desmarque la casilla ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Automatic Metric"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-set-metrics.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ingrese el valor deseado en el campo ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Interface Metric"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Si desea la prioridad más alta, ingrese ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "1"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Si desea una prioridad mayor que la de otros adaptadores, ingrese un número menor que los valores de métrica de los demás adaptadores."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para guardar la configuración y cerrar todas las ventanas, haga clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los valores que puede ingresar en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interface Metric"
            }), " van de ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "9999"
            }), ". Cuanto menor sea el valor, mayor será la prioridad."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "verificar-la-configuración",
          children: "Verificar la configuración"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Vuelva a abrir el ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Símbolo del sistema"
              }), " y ejecute el comando ", (0,jsx_runtime.jsx)(_components.code, {
                children: "route print"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Verifique si el valor de la métrica ha cambiado."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solución-de-problemas",
      children: "Solución de problemas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Si la configuración no se aplica, reinicie el equipo o deshabilite y vuelva a habilitar el adaptador de red."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si se pierde la conexión de red, vuelva a la configuración original y habilite de nuevo la opción ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Automatic Metric"
          }), ". Comuníquese con su administrador de red para verificar la configuración correcta."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si necesita cambiar la configuración de red después de instalar ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ", se recomienda desinstalar por completo el programa y luego volver a instalarlo."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "express-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Esta guía proporciona un método de instalación sencillo para usuarios primerizos."
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "custom-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Guía al usuario para configurar una instalación personalizada que se integre con una base de datos que ya haya instalado."
        })
      })]
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