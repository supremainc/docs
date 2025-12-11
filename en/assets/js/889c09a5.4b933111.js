"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["76613"], {
56967: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_scheduled_unlock_mdx_889_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-advanced-ac-scheduled-unlock-mdx-889.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_scheduled_unlock_mdx_889_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-scheduled-unlock","title":"Scheduled Unlock","description":"Guidelines for schedule unlock settings. Schedule unlock provides the feature of opening doors at specific times.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-scheduled-unlock.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-scheduled-unlock","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-scheduled-unlock","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-scheduled-unlock.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-scheduled-unlock","title":"Scheduled Unlock","description":"Guidelines for schedule unlock settings. Schedule unlock provides the feature of opening doors at specific times.","keywords":["Advanced access control","Scheduled Unlock"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Scheduled Lock","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-scheduled-lock"},"next":{"title":"Intrusion Alarm","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-intrusion-alarm"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-scheduled-unlock.mdx


const frontMatter = {
	id: 'settings-advanced-ac-scheduled-unlock',
	title: 'Scheduled Unlock',
	description: 'Guidelines for schedule unlock settings. Schedule unlock provides the feature of opening doors at specific times.',
	keywords: [
		'Advanced access control',
		'Scheduled Unlock'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Register scheduled unlock",
  "id": "addScheduledUnlockZone",
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
      children: "Guidelines for schedule unlock settings. Schedule unlock provides the feature of opening doors at specific times. This feature enhances access control and is useful for allowing access during certain time periods."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Schedule unlock supports only ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.globalZone.local",
          product: "2"
        }), " mode."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addScheduledUnlockZone",
      children: "Register scheduled unlock"
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
            sid: "zone.scheduledUnlock",
            product: "2"
          }), " and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the name of the schedule unlock feature to be added in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-schedule-unlock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the details of the schedule unlock feature in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " section. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the access group that can start the scheduled unlock in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedUnlock.firstManInTitle",
            product: "2"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After completing all settings, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " at the bottom of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "Setting options guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The details for schedule unlock settings are as follows."
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
            sid: "zone.forcedUnlock.firstManIn",
            product: "2"
          }), ": If set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activated",
            product: "2"
          }), ", the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedUnlock.firstManInTitle",
            product: "2"
          }), " section will appear. Users from the selected user group in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedUnlock.firstManInGroups",
            product: "2"
          }), " must authenticate according to the specified schedule to start the schedule unlock."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.selectoption",
            product: "2"
          }), ": Select the door or elevator to which the schedule unlock feature will be applied."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Selecting ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.door",
                product: "2"
              }), " activates the list of doors. Select the door to which the schedule unlock feature will be applied. Multiple doors can be selected."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Selecting ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.elevator",
                product: "2"
              }), " activates the list of elevators. Select the elevator to which the schedule unlock feature will be applied. Multiple elevators can be selected."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.selectoption",
              product: "2"
            }), " option appears when an elevator is registered. If no elevators are registered, only the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.door",
              product: "2"
            }), " option will appear. For more information about elevator enrollment, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-elevators-add",
              children: "the following"
            }), "."]
          })
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.floor",
            product: "2"
          }), ": You can select the floors for the selected elevator."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.globalZone.local",
              product: "2"
            }), " mode, you can select multiple doors to configure the schedule unlock feature."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If you select an elevator that is already part of another schedule unlock setting, you cannot duplicate settings on the same floor."
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