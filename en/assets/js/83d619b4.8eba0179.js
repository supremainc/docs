"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2599"], {
88535: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_apb_mdx_83d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-advanced-ac-apb-mdx-83d.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_apb_mdx_83d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-apb","title":"Anti-passback","description":"Guidelines for setting up anti-passback. Anti-passback provides enhanced features compared to anti-passback generated based on doors or devices.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-apb.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-apb","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-apb","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-apb.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-apb","title":"Anti-passback","description":"Guidelines for setting up anti-passback. Anti-passback provides enhanced features compared to anti-passback generated based on doors or devices.","keywords":["Advanced access control","Anti-passback"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Advanced Access Control Settings","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac"},"next":{"title":"Fire Alarm","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-fire-alarm"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-apb.mdx


const frontMatter = {
	id: 'settings-advanced-ac-apb',
	title: 'Anti-passback',
	description: 'Guidelines for setting up anti-passback. Anti-passback provides enhanced features compared to anti-passback generated based on doors or devices.',
	keywords: [
		'Advanced access control',
		'Anti-passback'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Register anti-passback",
  "id": "addAPBZone",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Glossary, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Anti-passback provides enhanced features compared to anti-passback generated based on doors or devices. Set up anti-passback to force users to use designated doors and devices upon entry and exit. This prevents unauthorized re-entry and enhances security."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(Glossary, {
        termid: "apb"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addAPBZone",
      children: "Register anti-passback"
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
            sid: "zone.antiPassback",
            product: "2"
          }), " and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the name of the additional anti-passback feature in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-apb.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the details of the anti-passback feature in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " section. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the actions to perform when an anti-passback violation occurs in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.alarm",
            product: "2"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the entry groups that can bypass anti-passback in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apb.bypass",
            product: "2"
          }), " section. Users belonging to this group can bypass anti-passback."]
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
        }), " section can only be used after configuring both ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.entryDevices",
          product: "2"
        }), " and ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.exitDevices",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "Setting options guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The details for anti-passback settings are as follows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone",
            product: "2"
          }), ": Set the application range."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.globalZone.local",
                product: "2"
              }), ": Can be set with entry devices connected via RS-485."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.globalZone.global",
                product: "2"
              }), ": Can be set to all devices registered in ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activatedAndDeactivated",
            product: "2"
          }), ": You can activate or temporarily deactivate the settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apbType",
            product: "2"
          }), ": Select the type of anti-passback."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.hard",
                product: "2"
              }), ": Creates anti-passback events and cannot enter."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.soft",
                product: "2"
              }), ": Creates anti-passback events and can enter."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime",
            product: "2"
          }), ": Set the waiting time until re-entry is allowed after a user violates anti-passback rules. After the specified time has passed following an alarm, the user's access is automatically allowed."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Can be set within the range of ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "1"
              }), " minute to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "10080"
              }), " minutes (7 days)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Setting to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "0"
              }), " minutes will prevent the alarm from clearing automatically until the administrator clears it manually."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apbUseDoorSensor",
            product: "2"
          }), ": Set the scope in which anti-passback rules apply."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.on",
                product: "2"
              }), ": Anti-passback rules apply according to the actual operation of the entry and exit devices."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.off",
                product: "2"
              }), ": Rules apply based on user authentication regardless of the door's operation."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbUseEachDoorSensorSetting",
                product: "2"
              }), ": When using APB based on entry for the corresponding door, the anti-passback rules apply according to the sensor usage option setting."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.entryDevices",
            product: "2"
          }), ": Select the device to be used when entering. You can choose from the list of registered devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.exitDevices",
            product: "2"
          }), ": Select the device to be used when exiting. You can choose from the list of registered devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apbFailAction",
            product: "2"
          }), ": Set the door action when communication with devices configured with anti-passback in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " is interrupted. This feature is available when the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone",
            product: "2"
          }), " option is set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone.global",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbFailAction.noAction",
                product: "2"
              }), ": The door opens when the user is authenticated normally."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbFailAction.recordLog",
                product: "2"
              }), ": An anti-passback violation alarm occurs and the door opens."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbFailAction.doorLocked",
                product: "2"
              }), ": An anti-passback violation alarm occurs and the door does not open."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "For more information about device registration, refer to the following."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
        }), "\n"]
      })]
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