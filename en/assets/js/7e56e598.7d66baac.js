"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["56716"], {
71047: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_diff_unlock_lock_schedule_mdx_7e5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-diff-unlock-lock-schedule-mdx-7e5.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_diff_unlock_lock_schedule_mdx_7e5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/diff-unlock-lock-schedule","title":"Difference Between Unlock and Lock Schedules","description":"Compare the differences between unlock and lock schedules in BioStar Air and learn when to use each one.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/diff-unlock-lock-schedule.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/diff-unlock-lock-schedule","permalink":"/docs/en/platform/biostar_air/diff-unlock-lock-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/diff-unlock-lock-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"diff-unlock-lock-schedule","title":"Difference Between Unlock and Lock Schedules","description":"Compare the differences between unlock and lock schedules in BioStar Air and learn when to use each one.","keywords":["Unlock schedule","Lock schedule","Schedule","Access control"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Troubleshoot Video Playback Issues","permalink":"/docs/en/platform/biostar_air/video-troubleshooting"},"next":{"title":"v2.11","permalink":"/docs/en/platform/biostar_air/release-notes/v2_11"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/diff-unlock-lock-schedule.mdx


const frontMatter = {
	id: 'diff-unlock-lock-schedule',
	title: 'Difference Between Unlock and Lock Schedules',
	description: 'Compare the differences between unlock and lock schedules in BioStar Air and learn when to use each one.',
	keywords: [
		'Unlock schedule',
		'Lock schedule',
		'Schedule',
		'Access control'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "When Do You Need Schedules",
  "id": "when-do-you-need-schedules",
  "level": 2
}, {
  "value": "<Cmd class=\"bold\"></Cmd> vs <Cmd class=\"bold\"></Cmd>",
  "id": "-vs-",
  "level": 2
}, {
  "value": "Unlock schedule",
  "id": "unlock-schedule",
  "level": 2
}, {
  "value": "How it works",
  "id": "how-it-works",
  "level": 3
}, {
  "value": "Typical use cases",
  "id": "typical-use-cases",
  "level": 3
}, {
  "value": "Unlock after the first authentication (optional)",
  "id": "unlock-after-the-first-authentication-optional",
  "level": 3
}, {
  "value": "How it works",
  "id": "how-it-works-1",
  "level": 4
}, {
  "value": "Typical use cases",
  "id": "typical-use-cases-1",
  "level": 4
}, {
  "value": "Lock schedule",
  "id": "lock-schedule",
  "level": 2
}, {
  "value": "How it works",
  "id": "how-it-works-2",
  "level": 3
}, {
  "value": "Typical use cases",
  "id": "typical-use-cases-2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "when-do-you-need-schedules",
      children: "When Do You Need Schedules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Door schedules are optional"
      }), ". Most sites operate effectively with basic access control alone. When an authorized user presents a valid credential, the door unlocks automatically—no additional schedule configuration required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure schedules only in the following situations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When you need to allow unrestricted access during specific time periods"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When you need to block all users from entering during specific time periods"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When you need to apply different access policies for different times"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To avoid confusion between ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "unlock_schedule",
        product: "air",
        className: "bold"
      }), " and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "lock_schedule",
        product: "air",
        className: "bold"
      }), " in BioStar Air, understand how each schedule works and when to use it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on configuring door schedules, see ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-door-schedules"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-vs-",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "unlock_schedule",
        product: "air",
        className: "bold"
      }), " vs ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "lock_schedule",
        product: "air",
        className: "bold"
      })]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Unlock Schedule"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Lock Schedule"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Door state during schedule"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Always unlocked"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Always locked"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Authentication required"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Not required, anyone can freely access"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Credentials cannot unlock the door"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Manual unlock"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Possible"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Only site administrator can unlock"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Relay operation"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Continuously triggered"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Does not trigger"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Site administrator refers to designated administrators in the BioStar Air Admin portal or mobile app."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "unlock-schedule",
      children: "Unlock schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works",
      children: "How it works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During the scheduled period, the door remains unlocked and the relay stays continuously triggered. No authentication is required for anyone to enter freely during this time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typical-use-cases",
      children: "Typical use cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Main entrance doors in public areas"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Shared amenities in residential communities"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Office lobby doors during business hours"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unlock-after-the-first-authentication-optional",
      children: "Unlock after the first authentication (optional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-it-works-1",
      children: "How it works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the schedule begins, the door starts in a locked state."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the first authorized user presents their credential, the door unlocks."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The door remains unlocked for the rest of the scheduled period, allowing all users to enter freely."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on the unlock after first authentication option (", (0,jsx_runtime.jsx)(Cmd, {
          sid: "unlock_after_first_auth",
          product: "air"
        }), "), see ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-door-schedules#configuringUnlockSchedules"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "typical-use-cases-1",
      children: "Typical use cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retail stores that open only after staff arrive"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Offices where the first employee arriving unlocks the building for others"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Membership facilities that require staff to initiate access before members can enter"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lock-schedule",
      children: "Lock schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works-2",
      children: "How it works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During the scheduled period, the door remains locked and the relay does not trigger. Even if a valid credential is presented, the door cannot be unlocked through authentication. Only a site administrator can manually unlock the door through the BioStar Air Admin portal or mobile app."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typical-use-cases-2",
      children: "Typical use cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Areas that must be strictly closed after certain hours"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Facilities such as pools, gyms, or other restricted areas"
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