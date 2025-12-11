"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3065"], {
1478: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_overtime_mdx_25d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-shift-overtime-mdx-25d.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_overtime_mdx_25d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-shift-overtime","title":"Set Other Work Rules","description":"This provides methods to add additional work rules that can be useful when overtime rules are not added to the daily work rules.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-overtime.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-shift-overtime","permalink":"/en/platform/biostar_x/tna-rule-shift-overtime","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-shift-overtime.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-shift-overtime","title":"Set Other Work Rules","description":"This provides methods to add additional work rules that can be useful when overtime rules are not added to the daily work rules.","keywords":["Other work rules","Overtime"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Set Weekly Shifts","permalink":"/en/platform/biostar_x/tna-rule-shift-schedule"},"next":{"title":"Set the Schedule","permalink":"/en/platform/biostar_x/tna-rule-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-overtime.mdx


const frontMatter = {
	id: 'tna-rule-shift-overtime',
	title: 'Set Other Work Rules',
	description: 'This provides methods to add additional work rules that can be useful when overtime rules are not added to the daily work rules.',
	keywords: [
		'Other work rules',
		'Overtime'
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is useful when overtime rules are not added to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), ". The overtime settings in ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " have start and end times, while ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), " calculates the total hours beyond the regular working hours. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), " is convenient for managing total overtime hours on a daily, weekly, or monthly basis. When ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), " is set, it replaces the overtime rules added to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.addRule",
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
            sid: "rule.rule",
            product: "2"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.addRule",
            product: "2"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-overtime.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.addRule",
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
            children: ["After saving the settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " button to add another ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "rule.rule",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-options-guide",
      children: "Setting options guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), ". You can set overtime rules to apply on a daily, weekly, or monthly basis."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-overtime-adding.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.name",
            product: "2"
          }), ": Enter the name of ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
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
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.overtime",
            product: "2"
          }), ": Select the overtime rules to apply after the regular working hours on a daily, weekly, or monthly basis. You can apply other overtime rules after a certain period of time. You can also set a maximum overtime limit to restrict the amount of overtime hours an employee can work."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "tip",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["If set as follows, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overtime(1.5)"
            }), " time rule will apply from 5:00 PM to 11:00 PM when the regular work hours are from 8:00 AM to 5:00 PM, and the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overtime(2)"
            }), " time rule will apply from 11:00 PM to 2:00 AM. In addition, daily overtime is restricted to a maximum of 9 hours, and records only until 2:00 AM will be used to calculate daily wages."]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-overtime-example.png"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Total working hours do not include breaks or meal times."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.weekendOvertime",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.holidayOvertime",
            product: "2"
          }), ": Set the work rules to apply on weekends or holidays."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "payCode.payCode",
                product: "2"
              }), ": Select the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "tab.payCode",
                product: "2",
                className: "normal"
              }), " to apply."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.dayStartTime",
                product: "2"
              }), ": Set the start time of work."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "rule.firstInLastOut",
                product: "2"
              }), ": Record the time the first user authenticated as the start time and the time the last user authenticated as the end time."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "tna-rule-schedule",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "This guides you on how to set up your work schedule by configuring period, users, other work rules, and leave schedules."
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