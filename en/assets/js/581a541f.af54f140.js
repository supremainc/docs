"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1853"], {
29892: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_system_requirements_mdx_581_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-system-requirements-mdx-581.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_system_requirements_mdx_581_namespaceObject = JSON.parse('{"id":"platform/biostar_x/system-requirements","title":"System minimum requirements","description":"Check the system requirements for installing BioStar X to configure the optimal environment for your organization size.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/system-requirements.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/system-requirements","permalink":"/docs/en/platform/biostar_x/system-requirements","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/system-requirements.mdx","tags":[],"version":"current","frontMatter":{"id":"system-requirements","title":"System minimum requirements","description":"Check the system requirements for installing BioStar X to configure the optimal environment for your organization size.","keywords":["System minimum requirements","Operating System","Database","CPU","RAM"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Before start","permalink":"/docs/en/platform/biostar_x/before-start"},"next":{"title":"Getting Started","permalink":"/docs/en/platform/biostar_x/getting-started"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/system-requirements.mdx


const frontMatter = {
	id: 'system-requirements',
	title: 'System minimum requirements',
	description: 'Check the system requirements for installing BioStar X to configure the optimal environment for your organization size.',
	keywords: [
		'System minimum requirements',
		'Operating System',
		'Database',
		'CPU',
		'RAM'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Main Server",
  "id": "main-server",
  "level": 2
}, {
  "value": "SQL Server license requirements",
  "id": "sqlserver-requriements",
  "level": 3
}, {
  "value": "General usage",
  "id": "general",
  "level": 4
}, {
  "value": "Using the BioStar X API",
  "id": "useapi",
  "level": 4
}, {
  "value": "Communication Server",
  "id": "communication-server",
  "level": 2
}, {
  "value": "Client",
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
      }), " provides a reliable and scalable integrated security management solution for large enterprise environments. The system can efficiently manage over a thousand devices through a distributed architecture consisting of a main server and a communication server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The main server manages the core management features of the system, while the communication server is responsible for device communication, distributing the load and optimizing performance. Additionally, administrators can access the system via a web browser on client PCs and perform all management tasks. Check the system requirements below to configure the optimal environment for your organization size."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on license configuration and optimization, contact ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://support.supremainc.com",
          children: "Suprema Technical Support"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "main-server",
      children: "Main Server"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The main server is the server where the central management system of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " is installed. The user accesses the system through a web browser to manage it and handle all tasks such as setting user information or access permissions. It is also responsible for monitoring the overall status of the system and managing event logs or alarms."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col5--15-10-25",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "Item"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Small"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Mid-sized organization"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Enterprise"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Usage Environment"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total Devices"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1 to 50"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "51 to 100"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "101 to 1,000"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "6",
              children: "System Requirement"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Operating System"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "Windows 10, Windows 11, Windows Server 2016, Windows Server 2019, Windows Server 2022"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Database"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "MariaDB 11.4.4, MS SQL Server 2012 SP3, MS SQL Server 2014 SP2, MS SQL Server 2016 SP1, MS SQL Server 2017, MS SQL Server 2019, MS SQL Server 2022"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.3GHz 6-core"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.3 GHz 8-core"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Minimum 2.3 GHz", (0,jsx_runtime.jsx)("br", {}), "Recommended 4.0 GHz 16-core"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "16 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "32 GB"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Minimum 64 GB", (0,jsx_runtime.jsx)("br", {}), "Recommended 128 GB"]
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
              children: ["When using the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.imageLog",
                product: "2"
              }), " feature, 200 GB is required for 10 million image logs."]
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
            }), " can only be installed on 64-bit operating systems."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "MS SQL Server communication security supports TLS 1.2."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If MS SQL Server and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " are installed on different PCs, you should install the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://learn.microsoft.com/sql/connect/oledb/download-oledb-driver-for-sql-server",
              children: "Microsoft OLE DB Driver for SQL Server"
            }), " on a PC with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " installed."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "For enterprise environment, it is recommended to install an MS SQL Server database."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you are using an MS SQL Server database and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X T&A"
            }), ", you will need to install the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://learn.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16#version-17",
              children: "Microsoft ODBC Driver 17 for SQL Server"
            }), " appropriate for your environment."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The Windows virtual environment provided by Boot Camp on macOS is not supported."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sqlserver-requriements",
      children: "SQL Server license requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If using SQL Server as the database, a proper SQL Server license is required depending on the number of connected devices for stable operation of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Refer to the recommended license configurations for each environment to select a license suitable for the size and needs of your organization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on SQL Server licenses, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.microsoft.com/sql-server/sql-server-2022-pricing",
          children: "Microsoft SQL Server Licensing"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "general",
      children: "General usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Organization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Devices"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Number of cores"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Server license"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 to 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 - 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "3",
            children: "SQL Server Standard Edition (Core-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mid-sized organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 - 300 devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 - 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 - 1,000 devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 - 24"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "useapi",
      children: "Using the BioStar X API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Organization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Devices"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Number of cores"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Server license"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 to 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 - 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "3",
            children: "SQL Server Standard Edition (Core-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mid-sized organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 - 300 devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 - 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 - 1,000 devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 - 24"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "communication-server",
      children: "Communication Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The communication server is a server dedicated to communication with access control devices. It helps to manage many devices reliably by installing separately from the main server. A single communication server can connect up to 1,000 devices, and you can add multiple communication servers as needed."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "Item"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Specification"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "4",
              children: "System Requirement"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Operating System"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Windows 10, Windows 11, Windows Server 2016, Windows Server 2019, Windows Server 2022"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Minimum 2.3 GHz, recommended 4.0 GHz 16-core"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Minimum 64 GB, recommended 128 GB"
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
      children: "Client"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The client is the PC where administrators access ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " through a web browser to operate the system."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "Item"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Small"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Mid-sized organization"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Enterprise"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "4",
              children: "System Requirement"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.5 GHz"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.5 GHz"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Minimum 2.5 GHz"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "16 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "32 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Minimum 32 GB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "GPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "Minimum NVIDIA GeForce RTX 4060 when using VMS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "web browser"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "Google Chrome version 100 or higher"
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
            }), " is optimized for Google Chrome."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The web interface of ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " does not provide support for mobile browsers."]
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