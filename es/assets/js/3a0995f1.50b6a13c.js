"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["27344"], {
74199: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_ad_encrypt_mdx_3a0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-ad-encrypt-mdx-3a0.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_ad_encrypt_mdx_3a0_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ad-encrypt","title":"Cifrado de Active Directory","description":"Es posible usar el cifrado al comunicarse con un servidor de Windows Active Directory.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/ad-encrypt.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ad-encrypt","permalink":"/docs/es/platform/biostar_x/ad-encrypt","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ad-encrypt.mdx","tags":[],"version":"current","frontMatter":{"id":"ad-encrypt","title":"Cifrado de Active Directory","description":"Es posible usar el cifrado al comunicarse con un servidor de Windows Active Directory.","displayed_sidebar":"biostarx","isTranslationMissing":false},"sidebar":"biostarx"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/ad-encrypt.mdx


const frontMatter = {
	id: 'ad-encrypt',
	title: 'Cifrado de Active Directory',
	description: 'Es posible usar el cifrado al comunicarse con un servidor de Windows Active Directory.',
	displayed_sidebar: 'biostarx',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Paso 1. Instalar los servicios de certificados de Active Directory",
  "id": "paso-1-instalar-los-servicios-de-certificados-de-active-directory",
  "level": 2
}, {
  "value": "Paso 2. Conectar LDAPS (LDAP sobre SSL/TLS)",
  "id": "paso-2-conectar-ldaps-ldap-sobre-ssltls",
  "level": 2
}, {
  "value": "Paso 3. Copiar el certificado raíz",
  "id": "paso-3-copiar-el-certificado-raíz",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Es posible usar el cifrado al comunicarse con un servidor de Windows Active Directory. Configure según el siguiente orden cuando use el cifrado por primera vez."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "paso-1-instalar-los-servicios-de-certificados-de-active-directory",
      children: "Paso 1. Instalar los servicios de certificados de Active Directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para utilizar la comunicación cifrada del servidor de Windows Active Directory, debe instalar los Servicios de Certificados de Active Directory. Los Servicios de Certificados de Active Directory se pueden instalar de la siguiente manera:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En el PC donde está instalado el servidor de Windows Active Directory, ejecute ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Manager"
          }), " y luego haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manage"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Roles and Features"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Before You Begin"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Select Installation Type"
          }), ", seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Role-Based or feature-based installation"
          }), " y luego haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Select destination server"
          }), ", seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Select a server from the server pool"
          }), ", marque el servidor y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Select Server Roles"
          }), ", seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory Certificate Services"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca una ventana emergente, revise los detalles y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Features"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Revise los detalles de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory Certificate Services"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirm installation selections"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install"
          }), ". Cuando finalice la instalación, haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Active Directory Certificate Services on the destination server"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "AD CS Configuration wizard"
          }), ", revise los detalles y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Role Services"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certification Authority"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la página ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Setup Type"
          }), ", seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enterprise CA"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la página ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Specify the type of the CA"
          }), ", seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Root CA"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la página ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Specify the type of the private key"
          }), ", seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a new private key"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cryptography for CA"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CA Name"
          }), " y ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validity Period"
          }), ", y luego haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la página ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CA Database"
          }), ", establezca la ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "folder location for the certificate database"
          }), " y el ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "certificate database log"
          }), ", y luego haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la página ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirmation"
          }), ", revise los detalles de Active Directory Certificate Services y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "paso-2-conectar-ldaps-ldap-sobre-ssltls",
      children: "Paso 2. Conectar LDAPS (LDAP sobre SSL/TLS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Start"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ldp"
          }), " en el campo de entrada."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ldp-disconnected"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Connect"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Complete los campos ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server"
          }), " y ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Port"
          }), " y seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SSL"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "paso-3-copiar-el-certificado-raíz",
      children: "Paso 3. Copiar el certificado raíz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecute el Símbolo del sistema en el PC donde está instalado el servidor de Windows Active Directory."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese el comando ", (0,jsx_runtime.jsx)(_components.code, {
            children: "certutil -ca.cert client.crt"
          }), " para copiar el certificado raíz."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese el comando ", (0,jsx_runtime.jsx)(_components.code, {
            children: "keytool -import -keystore ad.jks -file client.crt"
          }), " para convertir el certificado del servidor al formato ", (0,jsx_runtime.jsx)(_components.em, {
            children: ".jks"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Guarde el certificado del servidor en formato ", (0,jsx_runtime.jsx)(_components.em, {
            children: ".jks"
          }), " en la ruta de instalación de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n"]
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