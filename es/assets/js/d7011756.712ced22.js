"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["54473"], {
28263: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_facestation_2_release_notes_150_mdx_d70_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-facestation-2-release-notes-150-mdx-d70.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_facestation_2_release_notes_150_mdx_d70_namespaceObject = JSON.parse('{"id":"device/facestation_2/release-notes/150","title":"Firmware Version 1.5.0","description":"Release2021-07-08","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/facestation_2/release-notes/150.mdx","sourceDirName":"device/facestation_2/release-notes","slug":"/device/facestation_2/release-notes/150","permalink":"/docs/es/device/facestation_2/release-notes/150","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_2/release-notes/150.mdx","tags":[],"version":"current","frontMatter":{"id":"150","title":"Firmware Version 1.5.0","isTranslationMissing":false},"sidebar":"facestation2","previous":{"title":"Firmware Version 1.5.1","permalink":"/docs/es/device/facestation_2/release-notes/151"},"next":{"title":"Firmware Version 1.4.2","permalink":"/docs/es/device/facestation_2/release-notes/142"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/facestation_2/release-notes/150.mdx


const frontMatter = {
	id: 150,
	title: 'Firmware Version 1.5.0',
	isTranslationMissing: false
};
const contentTitle = 'Firmware Version 1.5.0 (Build No. 1.5.0_210628)';

const assets = {

};



const toc = [{
  "value": "Main Fixes",
  "id": "main-fixes",
  "level": 2
}, {
  "value": "New Features and Improvements",
  "id": "new-features-and-improvements",
  "level": 2
}, {
  "value": "Bug Fixes",
  "id": "bug-fixes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "firmware-version-150-build-no-150_210628",
        children: "Firmware Version 1.5.0 (Build No. 1.5.0_210628)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2021-07-08"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "main-fixes",
      children: "Main Fixes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Incorrect temperature was displayed when authenticating from a slave device with the thermal camera. ", (0,jsx_runtime.jsx)(Badge, {
          children: "1.4.0, 1.4.1, 1.4.2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Occupancy limit zone support"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added support for the option to toggle Screen Saver for slave devices."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved manually turning the secure tamper on or off even when the default hash key is set."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Separated event logs of Mobile Access cards and RFID cards."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved that the thermal camera works first when both the thermal camera and Wiegand bypass are set."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Changed to a new touch pad"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "For devices with firmware version 1.4.2 or earlier, please follow the instructions below when replacing the front cover (touch pad)."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Replace the front cover after upgrading the firmware to version 1.5.0 or later."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "If you have already replaced the front cover before upgrading the firmware to version 1.5.0 or later, please upgrade to the latest version firmware again."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The RS-485 communication did not work properly when connecting the device to a third-party controller after activating the Secure Communication mode. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "A large number of 'Door closed' logs occurred abnormally when the door sensor was set to the input port of Secure I/O 2 connected as a slave device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Added defensive code to initialize if an error in the IR LED value occurs. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.0 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The screen was abnormally displayed when the second user authentication was successful on a slave device with dual authentication. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An abnormal event log occurred when the temperature measurement failed after setting the temperature mode to 'Temperature Check Before Authentication'. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.0, 1.4.1, 1.4.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An abnormal event log occurred when measuring temperature after setting the temperature mode to 'Check Temperature Only'. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.0, 1.4.1, 1.4.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The changed settings were reflected in the log but were not displayed properly on the screen when the time and attendance code settings were changed. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The relay operated as Off (Lock) after setting the scheduled unlock zone in the elevator and rebooting the master device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The performed action, such as temperature output, was different from the intended action responding to the input signal set in the Trigger & Action feature when using the Suprema Thermal Camera. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.0, 1.4.1, 1.4.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An issue of Suprema Thermal Camera screen being maintained even when the thermal imaging camera was toggled from 'Enabled' to 'Disabled'. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.0, 1.4.1, 1.4.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The device abnormally terminated when establishing a communication connection with 'Device → Server'. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["All files in the database were deleted after exporting them to a USB. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The slave device rebooted abnormally. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The RS-485 disconnection log continuously occurred when Secure I/O 2 was connected. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Ten administrators were still not deleted from the device when initializing the device that has 1,000 assigned administrators. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Device registration using Mobile Access app does not work on dynamic sites. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The Wiegand reader operated as Unlock after setting the Wiegand reader connected to DM-20 to Lock and rebooting the device when using the device with DM-20. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When enrolling a new fingerprint to AoC, it was able to authenticate the user with both the new fingerprint data and the existing fingerprint data. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The door relay status was not displayed properly when rebooting the master device while Manual Lock or Manual Unlock was set. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 or earlier"
            })]
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