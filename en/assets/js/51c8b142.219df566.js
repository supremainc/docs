"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7178"], {
17572: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_schedule_mdx_51c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-shift-schedule-mdx-51c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_schedule_mdx_51c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-shift-schedule","title":"Set Weekly Shifts","description":"This guides how to create weekly shift rules based on the configured daily shift rules.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-shift-schedule","permalink":"/docs/en/platform/biostar_x/tna-rule-shift-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-shift-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-shift-schedule","title":"Set Weekly Shifts","description":"This guides how to create weekly shift rules based on the configured daily shift rules.","keywords":["Weekly shift rules"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Set Daily Shift","permalink":"/docs/en/platform/biostar_x/tna-rule-shift-day"},"next":{"title":"Set Other Work Rules","permalink":"/docs/en/platform/biostar_x/tna-rule-shift-overtime"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-schedule.mdx


const frontMatter = {
	id: 'tna-rule-shift-schedule',
	title: 'Set Weekly Shifts',
	description: 'This guides how to create weekly shift rules based on the configured daily shift rules.',
	keywords: [
		'Weekly shift rules'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Setting options guide",
  "id": "setting-options-guide",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcTrash2, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guides how to create weekly shift rules based on the configured ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "scheduleTemplate.addScheduleTemplate",
        product: "2",
        className: "bold"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.addScheduleTemplate",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.addScheduleTemplate",
            product: "2"
          }), " screen appears, set each item."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " at the bottom of the screen to save the settings."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To continue adding the work schedule, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.applyAndAddShift",
              product: "2"
            }), " button."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After saving the settings, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " to add another ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.scheduleTemplate",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-options-guide",
      children: "Setting options guide"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-schedule-adding.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.name",
            product: "2"
          }), ": Enter the name of ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "normal"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.description",
            product: "2"
          }), ": Enter a description for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "normal"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.type",
            product: "2"
          }), ": Set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "normal"
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.type.weekly",
            product: "2"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.type.daily",
            product: "2"
          }), " daily."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecting ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.type.daily",
            product: "2"
          }), " allows you to set the repeating usage period (", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.cycle",
            product: "2"
          }), ")."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-schedule-adding-daily.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.weekendSetting",
            product: "2"
          }), ": Set the days to designate as weekends."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.shift",
            product: "2"
          }), ": View the list of configured ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "normal"
          }), " rules."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Weekly/daily schedule: Drag and drop the configured ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "normal"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-schedule-adding-drag-shift.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["To apply to all from Monday to Sunday, click ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "scheduleTemplate.copyAll",
                  product: "2"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["To remove the applied ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "tab.shift",
                  product: "2",
                  className: "normal"
                }), ", click the ", (0,jsx_runtime.jsx)(IcTrash2, {}), " button."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Applying the set ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "tab.shift",
                  product: "2",
                  className: "normal"
                }), " with ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.dayStartTimeExcessTime",
                  product: "2"
                }), " cannot be set to have an excess time positioned more than 24 hours before the start time of the daily shift rules."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "tna-rule-shift-overtime",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "This guides how to create flexible shift rules by additionally applying overtime rules to daily shift rules."
        })
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