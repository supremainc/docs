"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["71062"], {
80291: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_plugins_getting_started_mdx_ba5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-plugins-getting-started-mdx-ba5.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_plugins_getting_started_mdx_ba5_namespaceObject = JSON.parse('{"id":"platform/plugins/getting-started","title":"Getting Started","description":"This guides the requirements and basic concepts for starting BioStar X plugin development.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/plugins/getting-started.mdx","sourceDirName":"platform/plugins","slug":"/platform/plugins/getting-started","permalink":"/docs/en/platform/plugins/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/plugins/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"Getting Started","description":"This guides the requirements and basic concepts for starting BioStar X plugin development.","keywords":["Plugin Development","Getting Started","Requirements","Architecture"],"isTranslationMissing":false},"sidebar":"bsxplugins","previous":{"title":"Overview","permalink":"/docs/en/platform/plugins/plugins-overview"},"next":{"title":"Development Guide","permalink":"/docs/en/platform/plugins/development-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/plugins/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: 'Getting Started',
	description: 'This guides the requirements and basic concepts for starting BioStar X plugin development.',
	keywords: [
		'Plugin Development',
		'Getting Started',
		'Requirements',
		'Architecture'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Before start",
  "id": "before-start",
  "level": 2
}, {
  "value": "Necessary prior knowledge",
  "id": "necessary-prior-knowledge",
  "level": 3
}, {
  "value": "Development environment requirements",
  "id": "development-environment-requirements",
  "level": 3
}, {
  "value": "Plugin architecture",
  "id": "plugin-architecture",
  "level": 2
}, {
  "value": "Plugin operation overview",
  "id": "plugin-operation-overview",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["This provides the basic requirements and concepts for developing plugins that integrate with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Before start"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "necessary-prior-knowledge",
      children: "Necessary prior knowledge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP REST API development experience"
          }), ": Basic understanding of web service development and API communication"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Understanding RSA public key encryption"
          }), ": Basic knowledge of asymmetric encryption methods"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Understanding AES symmetric key encryption"
          }), ": Basic knowledge of symmetric encryption methods"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Web server development experience"
          }), ": Python FastAPI, Node.js Express, Java Spring Boot, etc."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "development-environment-requirements",
      children: "Development environment requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X server"
          }), ": Test ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " environment"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Development web server"
          }), ": Web server to host the plugin"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP client"
          }), ": API testing tools like curl, Postman, etc."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "plugin-architecture",
      children: "Plugin architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " plugin operates with the following structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\n    autonumber\n    participant U as User\n    participant P as Plugin\n    participant SM as ServiceManager\n    participant BS as BioStar X Server\n    participant BC as BioStar X Client\n    \n    Note over U,BC: Register Plugin\n    U->>+SM: Register plugin\n    SM->>+P: Ping to register address / e.g. {address}/bsx\n    P->>-SM: Pong with header value in body\n    SM-->SM: Certificate generation\n    SM->>-U: Response / Reg success\n\n    Note over U,BC: Download certification\n    U->>+SM: Download certification\n    SM-->SM: Certification\n    SM->>-U: Response certification file\n\n    Note over U,BC: Open Plugin Service\n    U->>+BC: Plugin Click\n    BC->>-P: Post request(with user id, plugin id) with new tab\n    U-->>+P: Watched new tab\n    P->>+BS: Post method called <br/>→ /api/session/bridge,<br/>Body: {pluginid, userid, key (a random 32-byte key encrypted with the certification and transmitted)}\n    Note right of BS: /api/session/brdige\n    BS->>-P: Response (bs-session-ID)\n    Note right of BS: Encrypt the current user's bs-session-id using the key and transmit it.\n    Note right of P: bs-session-id must be decrypted before use\n    P->>-U: Response / Open Page"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The key or certificate cannot be downloaded again unless reissued after being downloaded once."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "plugin-operation-overview",
      children: "Plugin operation overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " plugin system operates in three main stages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Plugin registration"
          }), ": Registering the plugin server in the Service Manager and checking accessibility"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate management"
          }), ": Key management for secure communication using Session Bridge"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Plugin execution"
          }), ": Authentication through automatic session bridge when the user accesses the plugin"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For specific implementation methods at each stage, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./development-guide",
        children: "development guide"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Certificates can be downloaded from the details page of the corresponding plugin after plugin registration. If you lose the certificate, you can download it again. At this time, the existing certificate will be invalidated."
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