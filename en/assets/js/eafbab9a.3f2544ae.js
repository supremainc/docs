"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6775"], {
19271: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_mdx_eaf_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-videos-mdx-eaf.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_mdx_eaf_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos","title":"Video Settings","description":"Step-by-step guidance on how to build an integrated video security management system by linking BioStar X and VMS. Covers the entire process from VMS server integration to camera settings and rule configuration.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos","permalink":"/docs/en/platform/biostar_x/settings-videos","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos","title":"Video Settings","description":"Step-by-step guidance on how to build an integrated video security management system by linking BioStar X and VMS. Covers the entire process from VMS server integration to camera settings and rule configuration.","keywords":["Video","VMS","Integration","Camera","Settings","Rules"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Roll Call","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-roll-call"},"next":{"title":"Integrate VMS","permalink":"/docs/en/platform/biostar_x/settings-video-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos.mdx


const frontMatter = {
	id: 'settings-videos',
	title: 'Video Settings',
	description: 'Step-by-step guidance on how to build an integrated video security management system by linking BioStar X and VMS. Covers the entire process from VMS server integration to camera settings and rule configuration.',
	keywords: [
		'Video',
		'VMS',
		'Integration',
		'Camera',
		'Settings',
		'Rules'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Video settings overview",
  "id": "video-settings-overview",
  "level": 2
}, {
  "value": "Integrate VMS server",
  "id": "integrate-vms-server",
  "level": 3
}, {
  "value": "Set up the camera",
  "id": "set-up-the-camera",
  "level": 3
}, {
  "value": "Set up rules",
  "id": "set-up-rules",
  "level": 3
}, {
  "value": "Key features",
  "id": "key-features",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["With the video settings feature of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", you can manage access control and video security in an integrated manner. Utilize powerful security management features such as real-time video monitoring, event-linked recording, and automatic bookmark generation by integrating with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Management System"
      }), " (VMS)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The video settings feature is available through additional options with an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " license or higher. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "video-settings-overview",
      children: "Video settings overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The video settings consist of the following three steps."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "integrate-vms-server",
          children: "Integrate VMS server"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set up the connection between the VMS server and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " and configure the certificates. An essential step in building an integrated video security management system. For more information on this, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-video-integration",
            children: "the following"
          }), "."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "set-up-the-camera",
          children: "Set up the camera"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the necessary cameras among the cameras connected to the VMS and create groups for efficient management. For more information on this, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-camera",
            children: "the following"
          }), "."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "set-up-rules",
          children: "Set up rules"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create rules that link access events with video to utilize advanced features such as automatic bookmarks and event logging. For more information on this, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-rule",
            children: "the following"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-features",
      children: "Key features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Integrated monitoring"
          }), ": Manage access control and video security from a single interface."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Automatic event logging"
          }), ": Automatically record associated video and generate tags when access events occur."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Efficient search"
          }), ": Quickly search videos and collect evidence through bookmarks and event tags."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-time response"
          }), ": Instantly check relevant camera footage when security situations arise."]
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