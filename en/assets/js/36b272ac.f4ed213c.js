"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8295"], {
623: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_integration_paxton_2_0_troubleshooting_mdx_36b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-integration-paxton-2-0-troubleshooting-mdx-36b.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_integration_paxton_2_0_troubleshooting_mdx_36b_namespaceObject = JSON.parse('{"id":"integration/paxton_2.0/troubleshooting","title":"Troubleshooting","description":"This troubleshooting provides information to solve unexpected issues that you may encounter when using the product.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/integration/paxton_2.0/troubleshooting.mdx","sourceDirName":"integration/paxton_2.0","slug":"/integration/paxton_2.0/troubleshooting","permalink":"/docs/en/integration/paxton_2.0/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/integration/paxton_2.0/troubleshooting.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting","title":"Troubleshooting","isTranslationMissing":false},"sidebar":"paxton","previous":{"title":"Enrollment Helper Client","permalink":"/docs/en/integration/paxton_2.0/enrollment-helper-client"},"next":{"title":"Appendices","permalink":"/docs/en/integration/paxton_2.0/appendices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/integration/paxton_2.0/troubleshooting.mdx


const frontMatter = {
	id: 'troubleshooting',
	title: 'Troubleshooting',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Details, Image} = _components;
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This troubleshooting provides information to solve unexpected issues that you may encounter when using the product."
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q."
        }), " User present within Net2 is not within BioStar 2 after some time."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Check Logs folder present within install folder of Suprema Integration:"
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/troubleshooting1.png",
            alone: true
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "IntegrationSchedule.log"
            }), " is most likely (As this logs the sync), IntegrationBioStar.log logs the upload into BioStar 2."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Checking service status within ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings Editor"
            }), " can also shed some light on situation."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/troubleshooting1-1.png",
            alone: true
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Lastly, it can be a good option to enable ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Timed Sync"
            }), ", this ensures not just the event logs are used for syncage, a full sync will happen periodically if enabled."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/troubleshooting1-2.png",
            alone: true
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q."
        }), " Service terminates abruptly."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Ensure all login information in Settings Editor is correct, especially OEM Client password:"
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/troubleshooting2.png",
            alone: true
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q."
        }), " Errors sending email on Enrollment Helper."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Ensure ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SMTP Settings"
            }), " within ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings Editor"
            }), " are correct. (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test Email"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/troubleshooting3.png",
            alone: true
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Also ensure the correct email personalisation options have been entered/enabled."
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/troubleshooting3-1.png",
            alone: true
          }), "\n"]
        }), "\n"]
      })]
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