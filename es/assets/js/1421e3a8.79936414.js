"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["61841"], {
30886: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_system_requirements_mdx_142_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-system-requirements-mdx-142.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_system_requirements_mdx_142_namespaceObject = JSON.parse('{"id":"platform/biostar_x/system-requirements","title":"Requisitos mínimos del sistema","description":"Verifica los requisitos del sistema para instalar BioStar X y configurar el entorno óptimo según el tamaño de tu organización.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/system-requirements.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/system-requirements","permalink":"/docs/es/platform/biostar_x/system-requirements","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/system-requirements.mdx","tags":[],"version":"current","frontMatter":{"id":"system-requirements","title":"Requisitos mínimos del sistema","description":"Verifica los requisitos del sistema para instalar BioStar X y configurar el entorno óptimo según el tamaño de tu organización.","keywords":["Requisitos mínimos del sistema","Sistema operativo","Base de datos","CPU","RAM"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"지원 장치","permalink":"/docs/es/platform/biostar_x/supported-device"},"next":{"title":"Primeros pasos","permalink":"/docs/es/platform/biostar_x/getting-started"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/system-requirements.mdx


const frontMatter = {
	id: 'system-requirements',
	title: 'Requisitos mínimos del sistema',
	description: 'Verifica los requisitos del sistema para instalar BioStar X y configurar el entorno óptimo según el tamaño de tu organización.',
	keywords: [
		'Requisitos mínimos del sistema',
		'Sistema operativo',
		'Base de datos',
		'CPU',
		'RAM'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Servidor principal",
  "id": "main-server",
  "level": 2
}, {
  "value": "Requisitos de licencias de SQL Server",
  "id": "sqlserver-requriements",
  "level": 3
}, {
  "value": "Uso general",
  "id": "general",
  "level": 4
}, {
  "value": "Uso de la API de BioStar X",
  "id": "useapi",
  "level": 4
}, {
  "value": "Servidor de comunicación",
  "id": "communication-server",
  "level": 2
}, {
  "value": "Cliente",
  "id": "client",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " ofrece una solución confiable y escalable de gestión de seguridad integrada para entornos empresariales grandes. El sistema puede gestionar eficientemente más de mil dispositivos mediante una arquitectura distribuida compuesta por un servidor principal y un servidor de comunicación."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El servidor principal gestiona las funciones centrales del sistema, mientras que el servidor de comunicación se encarga de la comunicación con los dispositivos, distribuyendo la carga y optimizando el rendimiento. Además, los administradores pueden acceder al sistema a través de un navegador web en los equipos cliente y realizar todas las tareas de gestión. Consulta los siguientes requisitos del sistema para configurar el entorno óptimo según el tamaño de tu organización."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la configuración y optimización de licencias, comunícate con el ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://support.supremainc.com",
          children: "Servicio de soporte técnico de Suprema"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "main-server",
      children: "Servidor principal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El servidor principal es el servidor donde se instala el sistema de gestión central de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". El usuario accede al sistema mediante un navegador web para gestionarlo y realizar todas las tareas, como configurar la información de usuarios o los permisos de acceso. También se encarga de supervisar el estado general del sistema y de gestionar los registros de eventos o las alarmas."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col5--15-10-25",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "Ítem"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Pequeña"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Medio"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Corporativa"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Entorno de uso"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total Dispositivos"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1 a 50"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "51 a 100"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "101 a 1,000"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "6",
              children: "Requisito del sistema"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sistema operativo"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "Windows 10, Windows 11, Windows Server 2016, Windows Server 2019, Windows Server 2022, Windows Server 2025"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Base de datos"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "MariaDB 11.4.4, MS SQL Server 2012 SP3, MS SQL Server 2014 SP2, MS SQL Server 2016 SP1, MS SQL Server 2017, MS SQL Server 2019, MS SQL Server 2022"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.3 GHz de 6 núcleos"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.3 GHz de 8 núcleos"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Mínimo 2.3 GHz", (0,jsx_runtime.jsx)("br", {}), "Recomendado 4.0 GHz de 16 núcleos"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "16 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "32 GB"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Mínimo 64 GB", (0,jsx_runtime.jsx)("br", {}), "Recomendado 128 GB"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SSD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "512 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "512 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1 TB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "HDD"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              colSpan: "3",
              children: ["Al utilizar la función ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.imageLog",
                product: "2"
              }), ", se requieren 200 GB para 10 millones de registros de imágenes."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " solo se puede instalar en sistemas operativos de 64 bits."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La seguridad de comunicación de MS SQL Server admite TLS 1.2."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si MS SQL Server y ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " se instalan en diferentes equipos, instala el ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://learn.microsoft.com/sql/connect/oledb/download-oledb-driver-for-sql-server",
              children: "Controlador Microsoft OLE DB para SQL Server"
            }), " en el equipo donde esté instalado ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Para entornos empresariales, se recomienda instalar una base de datos MS SQL Server."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si utilizas una base de datos MS SQL Server y ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X T&A"
            }), ", deberás instalar el ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://learn.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16#version-17",
              children: "Controlador Microsoft ODBC 17 para SQL Server"
            }), " correspondiente a tu entorno."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El entorno virtual de Windows proporcionado por Boot Camp en macOS no es compatible."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sqlserver-requriements",
      children: "Requisitos de licencias de SQL Server"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si utilizas SQL Server como base de datos, se requiere una licencia adecuada de SQL Server según la cantidad de dispositivos conectados para el funcionamiento estable de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Consulta las configuraciones de licencias recomendadas para cada entorno y selecciona la licencia adecuada al tamaño y las necesidades de tu organización."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre las licencias de SQL Server, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.microsoft.com/sql-server/sql-server-2022-pricing",
          children: "Microsoft SQL Server Licensing"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "general",
      children: "Uso general"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Organización"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Dispositivos"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cantidad de núcleos"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pequeña"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 a 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 - 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 - 300 dispositivos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 - 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Corporativa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 - 1,000 dispositivos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 - 24"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "useapi",
      children: "Uso de la API de BioStar X"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Organización"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Dispositivos"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cantidad de núcleos"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pequeña"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 a 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 - 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 - 300 dispositivos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 - 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Corporativa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 - 1,000 dispositivos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 - 24"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "communication-server",
      children: "Servidor de comunicación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El servidor de comunicación es un servidor dedicado a la comunicación con dispositivos de control de acceso. Al instalarlo por separado del servidor principal, ayuda a gestionar muchos dispositivos de forma confiable. Un solo servidor de comunicación puede conectar hasta 1,000 dispositivos, y se pueden agregar varios servidores de comunicación según sea necesario."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "Ítem"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Especificación"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "4",
              children: "Requisito del sistema"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sistema operativo"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Windows 10, Windows 11, Windows Server 2016, Windows Server 2019, Windows Server 2022, Windows Server 2025"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Mínimo 2.3 GHz, recomendado 4.0 GHz de 16 núcleos"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Mínimo 64 GB, recomendado 128 GB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SSD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1 TB"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "client",
      children: "Cliente"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El cliente es el equipo desde el cual los administradores acceden a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " a través de un navegador web para operar el sistema."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "Ítem"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Pequeña"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Medio"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Corporativa"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "4",
              children: "Requisito del sistema"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.5 GHz"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.5 GHz"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Mínimo 2.5 GHz"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "16 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "32 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Mínimo 32 GB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "GPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "Mínimo NVIDIA GeForce RTX 4060 al usar VMS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "navegador web"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "Google Chrome versión 100 o superior"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " está optimizado para Google Chrome."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La interfaz web de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " no admite navegadores móviles."]
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