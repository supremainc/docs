"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["809"], {
68662: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_scheduled_lock_mdx_5c5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-advanced-ac-scheduled-lock-mdx-5c5.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_scheduled_lock_mdx_5c5_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-scheduled-lock","title":"Scheduled Lock","description":"Guidance on how to set up schedule lock. Schedule lock provides the ability to lock doors at specific times.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-scheduled-lock.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-scheduled-lock","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-scheduled-lock","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-scheduled-lock.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-scheduled-lock","title":"Scheduled Lock","description":"Guidance on how to set up schedule lock. Schedule lock provides the ability to lock doors at specific times.","keywords":["Advanced access control","Scheduled Lock"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Fire Alarm","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-fire-alarm"},"next":{"title":"Scheduled Unlock","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-scheduled-unlock"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-scheduled-lock.mdx


const frontMatter = {
	id: 'settings-advanced-ac-scheduled-lock',
	title: 'Scheduled Lock',
	description: 'Guidance on how to set up schedule lock. Schedule lock provides the ability to lock doors at specific times.',
	keywords: [
		'Advanced access control',
		'Scheduled Lock'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Register scheduled lock",
  "id": "addScheduledLockZone",
  "level": 2
}, {
  "value": "Setting options guide",
  "id": "setting",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Guidance on how to set up schedule lock. Schedule lock provides the ability to lock doors at specific times. This feature enhances access control and is useful for restricting access during certain periods."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Schedule lock settings only support ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.globalZone.local",
          product: "2"
        }), " mode."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addScheduledLockZone",
      children: "Register scheduled lock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.advancedAc.root"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addZone",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.scheduledLock",
            product: "2"
          }), " and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the name of the schedule lock feature to add in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-schedule-lock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the details of the schedule lock feature in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " section. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the action to take when a schedule lock violation occurs in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.alarm",
            product: "2"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the access group that can bypass the schedule lock in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedLock.bypass",
            product: "2"
          }), " section. Users in this group can bypass the schedule lock."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After completing all settings, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " at the bottom of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.alarm",
          product: "2"
        }), " section must set ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.pause.doorselected",
          product: "2"
        }), " to be usable."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "Setting options guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The details for setting schedule lock are as follows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activatedAndDeactivated",
            product: "2"
          }), ": You can activate or temporarily deactivate the settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedLock.doorLockType",
            product: "2"
          }), ": You can set it to lock only the entrance device or to lock both entrance and exit devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.doorselected",
            product: "2"
          }), ": Select the doors to specify schedule lock rules."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.schedule",
            product: "2"
          }), ": Select a schedule. If the desired schedule is not available, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAddSchedule",
            product: "2"
          }), " to add one."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can select multiple doors to configure schedule lock functionality in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.globalZone.local",
              product: "2"
            }), " mode."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about schedule settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule",
              children: "the following"
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