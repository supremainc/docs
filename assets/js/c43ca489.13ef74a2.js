"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1674"], {
6920: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_integration_dom_installation_mdx_c43_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-integration-dom-installation-mdx-c43.json
var site_docs_integration_dom_installation_mdx_c43_namespaceObject = JSON.parse('{"id":"integration/dom/installation","title":"Installation","description":"System environment","source":"@site/docs/integration/dom/installation.mdx","sourceDirName":"integration/dom","slug":"/integration/dom/installation","permalink":"/docs/integration/dom/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/integration/dom/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"Installation","isTranslationMissing":false},"sidebar":"dom","previous":{"title":"Introduction","permalink":"/docs/integration/dom/introduction"},"next":{"title":"Installing BioStar 2","permalink":"/docs/integration/dom/installing-biostar2"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/integration/dom/installation.mdx


const frontMatter = {
	id: 'installation',
	title: 'Installation',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "System environment",
  "id": "system-environment",
  "level": 2
}, {
  "value": "Compatible systems and devices",
  "id": "compatible-systems-and-devices",
  "level": 2
}, {
  "value": "Installing the Suprema DOM Integration",
  "id": "installing-the-suprema-dom-integration",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Image, Row, Table, Tbody, Td} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "system-environment",
      children: "System environment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Suprema DOM Integration operates normally in the same system environment BioStar 2. You can find the minimum system requirements for BioStar 2 at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://support.supremainc.com/en/support/solutions/articles/24000012962--biostar-2-system-requirements-supported-operating-system",
        children: "the following link"
      }), " and the latest download at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://download.supremainc.com/",
        children: "the following link"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compatible-systems-and-devices",
      children: "Compatible systems and devices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Microsoft Windows 10 or later"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Google Chrome"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DomPloy"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2.9.6 or Later"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DOM Devices:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/integration/dom-pro-v2-digital-cylinder.png",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/integration/dom-guard.png",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/integration/dom-rf-netmanager.png",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/integration/dom-loq.png",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/integration/dom-brige.png",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "DOM Pro V2 Digital Cylinder"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "DOM Guard"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "DOM RF NetManager"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "DOM LoQ"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "DOM Bridge"
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installing-the-suprema-dom-integration",
      children: "Installing the Suprema DOM Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This section describes how to install the Suprema DOM Integration."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the downloaded setup program. (ex. Suprema DOM Integration.exe)"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If prompted, select ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run Anyways"
            }), ", we're a trusted publisher!"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To continue the installation, click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration2.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), " after setting a path for Suprema DOM Integration to be installed (Or use the default)."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration3.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install"
          }), " and let it install. (Select yes on the windows popup)"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration4.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once installed, click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Finish"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration5.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The integration will initially be unlicensed, you'll need a licence code (from Suprema) or an offline license file (from Suprema). Enter this and press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), ", then ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration6.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration6-1.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Below is the view of the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings Editor"
          }), ", this will allow you to edit the settings of the integration, as linking DOM, Tapkey and BioStar 2."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration6-2.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DOM Login Details:"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration7.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DOM Settings"
          }), " section requires the IP address of your DOMBox/DOM Bridge, then the username and password (the default is usually ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "master"
          }), " for both), Card mode is required if using physical cards, as different card types are stored slightly different, you can then test the status of the connection by clicking ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test DOMBox connection"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "tapkey Settings:"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration8.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The tapkey section requires you to connect a tapkey account, if you select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "tapkey Login"
          }), ", a chrome window will open that will guide you through the login/registering."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration8-1.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration8-2.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tapkey will prompt for to allow the integration to login, click allow on this. If multiple owner accounts are detected, there will also be a selection to choose which site you would like to link to."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration8-3.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 Settings:"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/installing-suprema-dom-integration9.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "This is the section where the BioStar 2 login details are kept, the BioStar 2 base will be the connection point of the BioStar 2 API (This can generally stay as 127.0.0.1, as long as BioStar 2 is installed on the same machine). User and Pass will be the username and password used to login to the BioStar 2 UI."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "DB user and DB pass will be the username and password used to login to the BioStar 2 database, generally, the username will always be root, the password would be what was provided during initial installation."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar 2 Enckey Location is needed for tapkey events to properly feed through, the default value is above."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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