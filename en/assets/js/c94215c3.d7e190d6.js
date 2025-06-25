"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9002"], {
8370: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_initial_setup_guide_mdx_c94_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-initial-setup-guide-mdx-c94.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_initial_setup_guide_mdx_c94_namespaceObject = JSON.parse('{"id":"platform/biostar_x/initial-setup-guide","title":"Initial Setup Guide","description":"This document provides step-by-step instructions for the initial setup and operation of the BioStar X access control system.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/initial-setup-guide.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/initial-setup-guide","permalink":"/docs/en/platform/biostar_x/initial-setup-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/initial-setup-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"initial-setup-guide","title":"Initial Setup Guide","description":"This document provides step-by-step instructions for the initial setup and operation of the BioStar X access control system.","keywords":["Tutorial","Initial Setup","Device Enrollment","Access Control Setting","User Enrollment"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Change the Database","permalink":"/docs/en/platform/biostar_x/change-db"},"next":{"title":"User","permalink":"/docs/en/platform/biostar_x/how-to-guide-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/initial-setup-guide.mdx


const frontMatter = {
	id: 'initial-setup-guide',
	title: 'Initial Setup Guide',
	description: 'This document provides step-by-step instructions for the initial setup and operation of the BioStar X access control system.',
	keywords: [
		'Tutorial',
		'Initial Setup',
		'Device Enrollment',
		'Access Control Setting',
		'User Enrollment'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Device Enrollment",
  "id": "device-enrollment",
  "level": 2
}, {
  "value": "Door Enrollment and Settings",
  "id": "door-enrollment-and-settings",
  "level": 2
}, {
  "value": "Access Level Settings",
  "id": "access-level-settings",
  "level": 2
}, {
  "value": "Access Group Settings",
  "id": "access-group-settings",
  "level": 2
}, {
  "value": "User Registration",
  "id": "user-registration",
  "level": 2
}, {
  "value": "Advanced Access Control Settings",
  "id": "advanced-access-control-settings",
  "level": 2
}, {
  "value": "Monitoring",
  "id": "monitoring",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {DocLink, Step, Steps} = _components;
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Step-by-step settings are provided to ensure the proper operation of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " after initial installation. Follow each step sequentially to build an efficient access control environment."]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "device-enrollment",
          children: "Device Enrollment"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enroll the devices to be connected to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Configure separate authentication modes based on the devices or assign administrators to each device."]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Additionally, set actions based on various events generated by the device (such as authentication failure, duress fingerprint authentication, anti-passback violations, etc.)."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-manage-device-group"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-devices"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-wiegand"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-slave-device"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-device-details"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "door-enrollment-and-settings",
          children: "Door Enrollment and Settings"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Register the door information where the devices are installed. Configure relay, anti-passback, dual authentication, alarms, and more."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-manage-door-group"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-door-add"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "access-level-settings",
          children: "Access Level Settings"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Access levels are created by combining door and schedule information, allowing multiple doors and schedules to be registered under a single access level."
        }), (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/settings-access-control-manage-access-level"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "access-group-settings",
          children: "Access Group Settings"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Access groups are created by combining access levels (doors, schedules) and user information, enabling multiple access levels and users to be registered under a single access group."
        }), (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/settings-access-control-manage-access-group"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "user-registration",
          children: "User Registration"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Register user information, including fingerprints and other data used for access control. User information can be directly registered on the device or on the server where ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " operates. In addition, user information registered on the device can be imported to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ", or user information registered in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " can be sent to the device."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/user-group-manage"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/user-manage"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/add-user"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/enroll-credential"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "advanced-access-control-settings",
          children: "Advanced Access Control Settings"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure anti-passback and fire alarm zones, allowing settings for local and global zones within the fire alarm area."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-advanced-ac"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-map"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Available only with an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " or higher license. For more information on the licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "the following document"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "monitoring",
          children: "Monitoring"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Utilize a variety of monitoring features such as doors, maps, devices, and events to manage the access control system in real time."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-door"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-map"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-device"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-event"
            }), "\n"]
          }), "\n"]
        })]
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