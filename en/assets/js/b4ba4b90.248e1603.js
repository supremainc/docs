"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1708"], {
67183: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_data_automatic_report_schedule_mdx_b4b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-data-automatic-report-schedule-mdx-b4b.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_data_automatic_report_schedule_mdx_b4b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/data-automatic-report-schedule","title":"Automatic Report Schedule","description":"Set a schedule to automatically generate custom reports created by setting the DYNAMIC period.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/data-automatic-report-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/data-automatic-report-schedule","permalink":"/docs/en/platform/biostar_x/data-automatic-report-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/data-automatic-report-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"data-automatic-report-schedule","title":"Automatic Report Schedule","description":"Set a schedule to automatically generate custom reports created by setting the DYNAMIC period.","keywords":["Automatic Report","Schedule"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Generate Report","permalink":"/docs/en/platform/biostar_x/data-generate-reports"},"next":{"title":"Settings","permalink":"/docs/en/platform/biostar_x/data-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/data-automatic-report-schedule.mdx


const frontMatter = {
	id: 'data-automatic-report-schedule',
	title: 'Automatic Report Schedule',
	description: 'Set a schedule to automatically generate custom reports created by setting the DYNAMIC period.',
	keywords: [
		'Automatic Report',
		'Schedule'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Add auto-generated schedule",
  "id": "add-auto-generated-schedule",
  "level": 2
}, {
  "value": "Information setting",
  "id": "information-setting",
  "level": 3
}, {
  "value": "Report and schedule settings",
  "id": "report-and-schedule-settings",
  "level": 3
}, {
  "value": "Report format settings",
  "id": "report-format-settings",
  "level": 3
}, {
  "value": "Delete auto-generated schedule",
  "id": "delete-auto-generated-schedule",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set a schedule to automatically generate ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.customReport",
        product: "2"
      }), " created by setting the DYNAMIC period."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-auto-generated-schedule",
      children: "Add auto-generated schedule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " or select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " from the shortcut list at the top left of the screen on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.mainMenu.schedule",
            product: "2"
          }), " tab."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addSchedule",
            product: "2"
          }), " at the top right of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-auto-schedule-main.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.schedule.newSchedulePageTitle"
          }), " screen appears, set each item."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "information-setting",
      children: "Information setting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set basic information of Automatic Report Schedule."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-information.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.scheduleName",
          product: "2"
        }), ": Enter the schedule name."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "report-and-schedule-settings",
      children: "Report and schedule settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set the schedule to be automatically generated for each report."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-report-schedule.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.report",
            product: "2"
          }), ": Select a custom report to automatically generate. Only custom reports set to DYNAMIC period will appear."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.frequency",
            product: "2"
          }), ": Set the frequency to automatically generate reports."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.generateTime",
            product: "2"
          }), ": Set the time to automatically generate reports."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about creating custom reports, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "data-generate-reports#custom-report",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "report-format-settings",
      children: "Report format settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set the format for each report."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-report-format.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.outputType",
            product: "2"
          }), ": Set the automatically generate method of reports."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.reportTitle",
            product: "2"
          }), ": Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.showTitle",
            product: "2"
          }), " to display the report name as the title on every page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.header",
            product: "2"
          }), ": If ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.showHeader",
            product: "2"
          }), " is selected, the header is displayed when the report is created. Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.onEveryPage",
            product: "2"
          }), " to display the header on every page."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "The header may vary depending on the reports."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.footer",
            product: "2"
          }), ": Set whether to display page numbers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.fileFormat",
            product: "2"
          }), ": Set the file format for exporting reports."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.apply",
          product: "2"
        }), " to save the settings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If all settings are complete, set the path to save the report. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "data-settings",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-auto-generated-schedule",
      children: "Delete auto-generated schedule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " or select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " from the shortcut list at the top left of the screen on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.mainMenu.schedule",
            product: "2"
          }), " tab."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox of the schedule to delete from the auto schedule list."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-auto-schedule-remove-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.delete"
          }), " at the top right of the screen."]
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